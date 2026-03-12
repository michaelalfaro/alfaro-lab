// Site Search Implementation using Lunr.js
// This creates a fast, client-side search for the Jekyll site

(function() {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');

        if (results.length) {
            var appendString = '';

            for (var i = 0; i < results.length; i++) {
                var item = store[results[i].ref];
                appendString += '<div class="search-result">';
                appendString += '<h4><a href="' + item.url + '">' + item.title + '</a></h4>';
                appendString += '<p>' + item.content.substring(0, 200) + '...</p>';
                if (item.date) {
                    appendString += '<small class="text-muted">' + item.date + '</small>';
                }
                appendString += '</div><hr>';
            }

            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<p>No results found. Try different keywords.</p>';
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    var searchTerm = getQueryVariable('query');

    if (searchTerm) {
        document.getElementById('search-box').setAttribute("value", searchTerm);

        // Initialize Lunr index
        var idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('author');
            this.field('category');
            this.field('content');
            this.field('tags');

            for (var key in window.store) {
                this.add({
                    'id': key,
                    'title': window.store[key].title,
                    'author': window.store[key].author,
                    'category': window.store[key].category,
                    'content': window.store[key].content,
                    'tags': window.store[key].tags
                });
            }
        });

        var results = idx.search(searchTerm);
        displaySearchResults(results, window.store);
    }

    // Live search functionality
    document.addEventListener('DOMContentLoaded', function() {
        var searchInput = document.getElementById('search-input');
        var searchResults = document.getElementById('live-search-results');
        
        if (searchInput && searchResults) {
            searchInput.addEventListener('input', function(e) {
                var searchTerm = e.target.value.trim();
                
                if (searchTerm.length < 2) {
                    searchResults.style.display = 'none';
                    return;
                }

                // Initialize Lunr index if not already done
                if (typeof window.searchIndex === 'undefined') {
                    window.searchIndex = lunr(function () {
                        this.field('id');
                        this.field('title', { boost: 10 });
                        this.field('author');
                        this.field('category');
                        this.field('content');
                        this.field('tags');

                        for (var key in window.store) {
                            this.add({
                                'id': key,
                                'title': window.store[key].title,
                                'author': window.store[key].author,
                                'category': window.store[key].category,
                                'content': window.store[key].content,
                                'tags': window.store[key].tags
                            });
                        }
                    });
                }

                var results = window.searchIndex.search(searchTerm);
                
                if (results.length > 0) {
                    var appendString = '<div class="list-group">';
                    var maxResults = Math.min(results.length, 5); // Show max 5 results
                    
                    for (var i = 0; i < maxResults; i++) {
                        var item = window.store[results[i].ref];
                        appendString += '<a href="' + item.url + '" class="list-group-item list-group-item-action">';
                        appendString += '<h6 class="mb-1">' + item.title + '</h6>';
                        appendString += '<small>' + item.content.substring(0, 100) + '...</small>';
                        appendString += '</a>';
                    }
                    appendString += '</div>';
                    
                    searchResults.innerHTML = appendString;
                    searchResults.style.display = 'block';
                } else {
                    searchResults.style.display = 'none';
                }
            });

            // Hide results when clicking outside
            document.addEventListener('click', function(e) {
                if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                    searchResults.style.display = 'none';
                }
            });
        }
    });
})();