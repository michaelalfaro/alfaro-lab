// Enhanced Publications Features
// Adds Altmetric badges, reverses numbering, and improves formatting

document.addEventListener('DOMContentLoaded', function() {
    enhancePublications();
    addAltmetricBadges();
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
            // The new number counts DOWN from startNum.
            // The [N] is inside a child <span>, so we can't anchor with ^.
            // Match the first occurrence of [digits] in the HTML.
            var newNum = startNum - index;
            pub.innerHTML = pub.innerHTML.replace(/\[\d+\]/, '[' + newNum + ']');

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
        // Find DOI links inside this publication
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

        var container = document.createElement('div');
        container.className = 'altmetric-container';
        container.style.cssText = 'float: right; margin: 0 0 10px 15px;';
        container.appendChild(badge);

        pub.insertBefore(container, pub.firstChild);
    });

    // Now load the Altmetric embed script AFTER we've created all the badge divs
    var script = document.createElement('script');
    script.src = 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js';
    document.body.appendChild(script);
}

function extractDOI(url) {
    var doiMatch = url.match(/10\.\d{4,}\/[^\s]+/);
    return doiMatch ? doiMatch[0] : null;
}
