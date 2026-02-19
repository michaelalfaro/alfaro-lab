// Enhanced Publications Features
// Automatically adds Altmetric badges, improves formatting, and adds tracking

document.addEventListener('DOMContentLoaded', function() {
    enhancePublications();
    addAltmetricBadges();
    setupPublicationTracking();
});

function enhancePublications() {
    const publications = document.querySelectorAll('.bibliography li');
    
    publications.forEach(function(pub, index) {
        // Add publication item class
        pub.classList.add('publication-item');
        
        // Add fade-in animation with stagger
        setTimeout(function() {
            pub.classList.add('fade-in-up');
        }, index * 100);
        
        // Enhance author names (highlight lab member names)
        const labMembers = ['Alfaro', 'Michael Alfaro', 'M. Alfaro', 'M.E. Alfaro'];
        let content = pub.innerHTML;
        
        labMembers.forEach(function(member) {
            const regex = new RegExp('\\b' + member + '\\b', 'gi');
            content = content.replace(regex, '<strong style="color: var(--primary-blue);">' + member + '</strong>');
        });
        
        pub.innerHTML = content;
        
        // Add publication year highlighting
        const yearMatch = content.match(/\b(19|20)\d{2}\b/g);
        if (yearMatch) {
            const year = yearMatch[yearMatch.length - 1]; // Get the last year found
            pub.innerHTML = pub.innerHTML.replace(
                new RegExp('\\b' + year + '\\b', 'g'),
                '<span class="pub-year">' + year + '</span>'
            );
        }
        
        // Improve DOI links
        const doiLinks = pub.querySelectorAll('a[href*="doi.org"]');
        doiLinks.forEach(function(link) {
            if (!link.innerHTML.includes('DOI')) {
                link.innerHTML = '<i class="fas fa-external-link-alt"></i> DOI';
                link.setAttribute('target', '_blank');
                link.setAttribute('title', 'View publication on publisher website');
            }
        });
    });

    // Reverse numbering so oldest paper = #1, newest = highest number.
    // The "All Publications" list has every paper; use its count as the
    // total so the "Recent" subset starts from that same high number.
    var allLists = document.querySelectorAll('ol.bibliography');
    var totalPubs = 0;
    allLists.forEach(function(ol) {
        var count = ol.querySelectorAll('li').length;
        if (count > totalPubs) totalPubs = count;
    });
    allLists.forEach(function(ol) {
        ol.setAttribute('reversed', 'reversed');
        ol.setAttribute('start', totalPubs);
    });
    
    // Add publication count
    const totalCount = publications.length;
    const countBadge = document.createElement('div');
    countBadge.className = 'publication-count';
    countBadge.innerHTML = `<i class="fas fa-book"></i> ${totalCount} Publications Total`;
    countBadge.style.cssText = 'text-align: right; color: var(--text-light); font-size: 0.9em; margin-bottom: 20px;';
    
    const bibliographyContainer = document.querySelector('.all-publications') || document.querySelector('.bibliography');
    if (bibliographyContainer) {
        bibliographyContainer.insertBefore(countBadge, bibliographyContainer.firstChild);
    }
}

function addAltmetricBadges() {
    // Look for DOI links and add Altmetric badges
    const doiLinks = document.querySelectorAll('a[href*="doi.org"]');
    
    doiLinks.forEach(function(link) {
        const doi = extractDOI(link.href);
        if (doi) {
            // Create Altmetric badge container
            const altmetricContainer = document.createElement('div');
            altmetricContainer.className = 'altmetric-container';
            altmetricContainer.style.cssText = 'float: right; margin-left: 15px; margin-top: 5px;';
            
            // Add Altmetric badge
            const altmetricBadge = document.createElement('div');
            altmetricBadge.className = 'altmetric-embed';
            altmetricBadge.setAttribute('data-doi', doi);
            altmetricBadge.setAttribute('data-badge-type', 'donut');
            altmetricBadge.setAttribute('data-badge-popover', 'right');
            altmetricBadge.setAttribute('data-hide-no-mentions', 'true');
            
            altmetricContainer.appendChild(altmetricBadge);
            
            // Insert the badge into the publication item
            const pubItem = link.closest('.publication-item');
            if (pubItem) {
                pubItem.insertBefore(altmetricContainer, pubItem.firstChild);
            }
        }
    });
    
    // Trigger Altmetric embed script
    if (typeof _altmetric_embed_init === 'function') {
        _altmetric_embed_init();
    } else {
        // Fallback: reload Altmetric badges after a short delay
        setTimeout(function() {
            if (window.altmetric && window.altmetric.embed && window.altmetric.embed.init) {
                window.altmetric.embed.init();
            }
        }, 1000);
    }
}

function extractDOI(url) {
    const doiMatch = url.match(/10\.\d{4,}\/[^\s]+/);
    return doiMatch ? doiMatch[0] : null;
}

function setupPublicationTracking() {
    // Track publication interactions
    document.querySelectorAll('.bibliography li').forEach(function(pub) {
        // Track when publications come into view (for engagement metrics)
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && typeof trackPublication === 'function') {
                    const title = pub.textContent.split('.')[0].substring(0, 100); // First 100 chars as title
                    trackPublication(title, 'Academic Publication', new Date().getFullYear());
                    observer.unobserve(pub); // Only track once
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(pub);
        
        // Track clicks on publication links
        const links = pub.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                const linkType = link.href.includes('doi.org') ? 'DOI' : 
                                link.href.includes('scholar.google') ? 'Scholar' :
                                link.href.includes('pubmed') ? 'PubMed' : 'Other';
                
                if (typeof gtag === 'function') {
                    gtag('event', 'click', {
                        event_category: 'publication_link',
                        event_label: linkType,
                        value: 1
                    });
                } else if (typeof ga === 'function') {
                    ga('send', 'event', 'publication_link', 'click', linkType, 1);
                }
            });
        });
    });
    
    // Track page performance
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                if (typeof gtag === 'function') {
                    gtag('event', 'timing_complete', {
                        name: 'publications_load_time',
                        value: Math.round(loadTime),
                        event_category: 'site_performance'
                    });
                }
            }, 100);
        });
    }
}

// Export functions for manual use
window.PublicationsEnhancer = {
    enhance: enhancePublications,
    addAltmetric: addAltmetricBadges,
    setupTracking: setupPublicationTracking
};