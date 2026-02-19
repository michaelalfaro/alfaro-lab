// Enhanced Publications Features
// Adds Altmetric badges, citation counts, reverses numbering, and improves formatting

document.addEventListener('DOMContentLoaded', function() {
    enhancePublications();
    addAltmetricBadges();
    addCitationCounts();
});

function enhancePublications() {
    // Gather all bibliography lists and figure out the total publication count
    // from the largest list (the "All Publications" section).
    var allLists = document.querySelectorAll('ol.bibliography');
    var totalPubs = 0;
    allLists.forEach(function(ol) {
        var count = ol.querySelectorAll('li').length;
        if (count > totalPubs) totalPubs = count;
    });

    // Process each bibliography list
    allLists.forEach(function(ol) {
        var items = ol.querySelectorAll('li');
        var listSize = items.length;
        // For the "All" list, start = totalPubs. For "Recent" (subset), also
        // start at totalPubs so the newest paper always gets the highest number.
        var startNum = totalPubs;

        items.forEach(function(pub, index) {
            pub.classList.add('publication-item');

            // Replace the CSL-generated [N] with the reversed number.
            var newNum = startNum - index;

            // Target the number inside child nodes more precisely.
            // The CSL number [N] is typically inside the first <span>.
            var replaced = false;
            var spans = pub.querySelectorAll('span');
            for (var i = 0; i < spans.length; i++) {
                var span = spans[i];
                if (/^\s*\[\d+\]/.test(span.textContent)) {
                    span.innerHTML = span.innerHTML.replace(/\[\d+\]/, '[' + newNum + ']');
                    replaced = true;
                    break;
                }
            }
            // Fallback: replace in innerHTML directly (first match only)
            if (!replaced) {
                pub.innerHTML = pub.innerHTML.replace(/\[\d+\]/, '[' + newNum + ']');
            }

            // Highlight lab member names
            var labMembers = ['Alfaro', 'M.E. Alfaro', 'M. Alfaro'];
            labMembers.forEach(function(member) {
                var regex = new RegExp('\\b' + member.replace('.', '\\.') + '\\b', 'g');
                pub.innerHTML = pub.innerHTML.replace(regex,
                    '<strong style="color: var(--primary-blue);">' + member + '</strong>');
            });
        });
    });

    // Add publication count badge
    var bibliographyContainer = document.querySelector('.bibliography');
    if (bibliographyContainer && totalPubs > 0) {
        var countBadge = document.createElement('div');
        countBadge.className = 'publication-count';
        countBadge.innerHTML = '<i class="fas fa-book"></i> ' + totalPubs + ' Publications Total';
        countBadge.style.cssText = 'text-align: right; color: var(--text-light); font-size: 0.9em; margin-bottom: 20px;';
        bibliographyContainer.parentNode.insertBefore(countBadge, bibliographyContainer);
    }
}

function addAltmetricBadges() {
    var publications = document.querySelectorAll('.bibliography li.publication-item');

    publications.forEach(function(pub) {
        // Find DOI links inside this publication (now injected by bibliography_template)
        var doiLinks = pub.querySelectorAll('a[href*="doi.org"]');
        if (doiLinks.length === 0) return;

        var doi = extractDOI(doiLinks[0].href);
        if (!doi) return;

        // Create the Altmetric badge container
        var badge = document.createElement('div');
        badge.className = 'altmetric-embed';
        badge.setAttribute('data-doi', doi);
        badge.setAttribute('data-badge-type', 'donut');
        badge.setAttribute('data-badge-popover', 'right');
        badge.setAttribute('data-hide-no-mentions', 'true');
        badge.setAttribute('data-condensed', 'true');

        var container = document.createElement('div');
        container.className = 'altmetric-container';
        container.style.cssText = 'float: right; margin: 0 0 5px 10px; transform: scale(0.55); transform-origin: top right;';
        container.appendChild(badge);

        pub.insertBefore(container, pub.firstChild);
    });

    // Only load the Altmetric script if we created at least one badge
    if (document.querySelectorAll('.altmetric-embed').length > 0) {
        var script = document.createElement('script');
        script.src = 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js';
        document.body.appendChild(script);
    }
}

function addCitationCounts() {
    // Collect all DOIs from publications and map them to their <li> elements.
    // We use the largest bibliography list (All Publications) to avoid duplicating
    // work on the Recent subset — both sections share the same DOI links.
    var allLists = document.querySelectorAll('ol.bibliography');
    var doiMap = {}; // doi -> array of <li> elements

    allLists.forEach(function(ol) {
        var items = ol.querySelectorAll('li.publication-item');
        items.forEach(function(pub) {
            var doiLinks = pub.querySelectorAll('a[href*="doi.org"]');
            if (doiLinks.length === 0) return;
            var doi = extractDOI(doiLinks[0].href);
            if (!doi) return;
            if (!doiMap[doi]) doiMap[doi] = [];
            doiMap[doi].push(pub);
        });
    });

    var dois = Object.keys(doiMap);
    if (dois.length === 0) return;

    // Semantic Scholar batch API: POST up to 500 paper IDs at a time.
    // We request citationCount and the Semantic Scholar URL.
    var batchSize = 500;
    for (var i = 0; i < dois.length; i += batchSize) {
        var batch = dois.slice(i, i + batchSize);
        fetchCitationBatch(batch, doiMap);
    }
}

function fetchCitationBatch(dois, doiMap) {
    var ids = dois.map(function(d) { return 'DOI:' + d; });

    fetch('https://api.semanticscholar.org/graph/v1/paper/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ids: ids,
            fields: 'citationCount,url'
        })
    })
    .then(function(response) { return response.json(); })
    .then(function(results) {
        results.forEach(function(paper, index) {
            if (!paper || paper.citationCount === undefined) return;
            var doi = dois[index];
            var pubs = doiMap[doi];
            if (!pubs) return;

            pubs.forEach(function(pub) {
                // Find the DOI link to insert the citation badge after it
                var doiLink = pub.querySelector('a.doi-link');
                if (!doiLink) {
                    // Fallback: find any doi.org link
                    doiLink = pub.querySelector('a[href*="doi.org"]');
                }
                if (!doiLink) return;

                var citeBadge = document.createElement('a');
                citeBadge.className = 'citation-badge';
                citeBadge.href = paper.url + '#citing-papers';
                citeBadge.target = '_blank';
                citeBadge.rel = 'noopener';
                citeBadge.innerHTML = '<i class="fas fa-quote-right"></i> Cited by ' + paper.citationCount;
                citeBadge.title = 'View citing papers on Semantic Scholar';

                // Insert after the DOI link
                doiLink.parentNode.insertBefore(citeBadge, doiLink.nextSibling);
            });
        });
    })
    .catch(function(err) {
        console.warn('Semantic Scholar citation fetch failed:', err);
    });
}

function extractDOI(url) {
    var doiMatch = url.match(/10\.\d{4,}\/[^\s]+/);
    return doiMatch ? doiMatch[0] : null;
}
