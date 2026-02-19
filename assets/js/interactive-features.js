// Interactive Features for Alfaro Lab Website
// Includes publication filtering, smooth scrolling, and enhanced UX

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Publication filtering functionality
    initPublicationFilters();
    
    // Enhanced image loading
    initImageEnhancements();
    
    // Team member interactions
    initTeamInteractions();
    
    // Search enhancements
    initSearchEnhancements();
    
    // Performance monitoring
    initPerformanceTracking();
    
    // Accessibility enhancements
    initAccessibilityFeatures();
});

function initPublicationFilters() {
    const filterContainer = document.querySelector('.publication-filters');
    if (!filterContainer) return;

    // Create filter buttons
    const publications = document.querySelectorAll('.publication-item');
    const years = new Set();
    const types = new Set();
    
    publications.forEach(pub => {
        const year = pub.dataset.year;
        const type = pub.dataset.type || 'article';
        if (year) years.add(year);
        types.add(type);
    });

    // Create year filter
    if (years.size > 1) {
        const yearFilter = createFilterButtons('Year', Array.from(years).sort().reverse());
        filterContainer.appendChild(yearFilter);
    }

    // Create type filter
    if (types.size > 1) {
        const typeFilter = createFilterButtons('Type', Array.from(types));
        filterContainer.appendChild(typeFilter);
    }

    // Add search filter
    const searchFilter = createSearchFilter();
    filterContainer.appendChild(searchFilter);
}

function createFilterButtons(category, options) {
    const container = document.createElement('div');
    container.className = 'filter-group';
    container.innerHTML = `<h5>${category}</h5>`;
    
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'btn-group btn-group-sm';
    
    // "All" button
    const allBtn = document.createElement('button');
    allBtn.className = 'btn btn-default active';
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', () => filterPublications(category.toLowerCase(), null));
    buttonGroup.appendChild(allBtn);
    
    // Individual option buttons
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-default';
        btn.textContent = option;
        btn.addEventListener('click', () => {
            filterPublications(category.toLowerCase(), option);
            updateActiveButton(buttonGroup, btn);
        });
        buttonGroup.appendChild(btn);
    });
    
    container.appendChild(buttonGroup);
    return container;
}

function createSearchFilter() {
    const container = document.createElement('div');
    container.className = 'filter-group';
    container.innerHTML = `
        <h5>Search Publications</h5>
        <input type="text" class="form-control" id="pub-search" placeholder="Search by title, author, or keyword...">
    `;
    
    const searchInput = container.querySelector('#pub-search');
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filterPublications('search', this.value.toLowerCase());
        }, 300);
    });
    
    return container;
}

function filterPublications(filterType, filterValue) {
    const publications = document.querySelectorAll('.publication-item');
    
    publications.forEach(pub => {
        let show = true;
        
        switch(filterType) {
            case 'year':
                show = !filterValue || pub.dataset.year === filterValue;
                break;
            case 'type':
                show = !filterValue || (pub.dataset.type || 'article') === filterValue;
                break;
            case 'search':
                if (filterValue) {
                    const text = pub.textContent.toLowerCase();
                    show = text.includes(filterValue);
                }
                break;
        }
        
        pub.style.display = show ? 'block' : 'none';
        
        // Add animation
        if (show) {
            pub.classList.add('fade-in-up');
        }
    });
    
    // Update results count
    updateResultsCount();
}

function updateActiveButton(buttonGroup, activeBtn) {
    buttonGroup.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

function updateResultsCount() {
    const visiblePubs = document.querySelectorAll('.publication-item[style="display: block"], .publication-item:not([style*="none"])').length;
    const countElement = document.querySelector('.results-count');
    if (countElement) {
        countElement.textContent = `Showing ${visiblePubs} publications`;
    }
}

function initImageEnhancements() {
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.classList.add('fade-in-up');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Image zoom on click for research images
    images.forEach(img => {
        if (img.closest('.carousel') || img.closest('.research-gallery')) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => openImageModal(img.src, img.alt));
        }
    });
}

function openImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <img src="${src}" alt="${alt}" style="max-width: 90vw; max-height: 90vh;">
            <div class="caption">${alt}</div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); z-index: 9999; display: flex;
        align-items: center; justify-content: center; cursor: pointer;
    `;
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    document.body.appendChild(modal);
}

function initTeamInteractions() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        const img = member.querySelector('img');
        const bio = member.querySelector('.member-bio');
        
        if (img && bio) {
            // Show/hide bio on hover
            member.addEventListener('mouseenter', () => {
                bio.style.display = 'block';
                bio.classList.add('fade-in-up');
            });
            
            member.addEventListener('mouseleave', () => {
                bio.style.display = 'none';
            });
        }
    });
}

function initSearchEnhancements() {
    // Enhanced search with analytics tracking
    const searchInputs = document.querySelectorAll('#search-input, #search-box');
    
    searchInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && typeof trackSearch === 'function') {
                trackSearch(this.value);
            }
        });
    });
    
    // Add search suggestions based on popular content
    const suggestions = [
        'phylogeny', 'macroevolution', 'diversification', 
        'phylogenomics', 'phenoscaping', 'fishes',
        'acanthomorph', 'spiny-rayed fishes'
    ];
    
    searchInputs.forEach(input => {
        addSearchSuggestions(input, suggestions);
    });
}

function addSearchSuggestions(input, suggestions) {
    input.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value.length < 2) return;
        
        const matches = suggestions.filter(suggestion => 
            suggestion.toLowerCase().includes(value)
        );
        
        // Create/update suggestion dropdown
        let dropdown = input.parentNode.querySelector('.search-suggestions');
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.className = 'search-suggestions';
            input.parentNode.appendChild(dropdown);
        }
        
        if (matches.length > 0) {
            dropdown.innerHTML = matches
                .slice(0, 5)
                .map(match => `<div class="suggestion-item">${match}</div>`)
                .join('');
            
            dropdown.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    input.value = item.textContent;
                    dropdown.style.display = 'none';
                    // Trigger search
                    if (input.id === 'search-input') {
                        input.dispatchEvent(new Event('input'));
                    }
                });
            });
            
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });
}

function initPerformanceTracking() {
    // Core Web Vitals tracking
    if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            if (typeof gtag === 'function') {
                gtag('event', 'LCP', {
                    event_category: 'Web Vitals',
                    value: Math.round(lastEntry.startTime),
                    non_interaction: true
                });
            }
        }).observe({entryTypes: ['largest-contentful-paint']});

        // First Input Delay
        new PerformanceObserver((entryList) => {
            const firstInput = entryList.getEntries()[0];
            
            if (typeof gtag === 'function') {
                gtag('event', 'FID', {
                    event_category: 'Web Vitals',
                    value: Math.round(firstInput.processingStart - firstInput.startTime),
                    non_interaction: true
                });
            }
        }).observe({entryTypes: ['first-input']});
    }
}

function initAccessibilityFeatures() {
    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Focus visible for keyboard navigation
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Skip to main content link
    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    // Ensure main content has proper ID
    const mainContent = document.querySelector('#homeid') || document.querySelector('main');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    if (mainContent && !mainContent.getAttribute('tabindex')) {
        mainContent.setAttribute('tabindex', '-1');
    }
}

// Utility function to debounce function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}