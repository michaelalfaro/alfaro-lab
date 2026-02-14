---
layout: default
title: "Search"
permalink: /search/
---

# Search

<div class="search-container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <form action="{{ site.baseurl }}/search/" method="get">
                <div class="form-group">
                    <input type="text" id="search-box" name="query" class="form-control input-lg" placeholder="Search publications, research, news..." value="">
                    <button type="submit" class="btn btn-primary btn-lg" style="margin-top: 10px;">
                        <i class="fa fa-search"></i> Search
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="search-results-container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div id="search-results"></div>
        </div>
    </div>
</div>

<script src="https://unpkg.com/lunr/lunr.js"></script>
<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}",
        "tags": "{{ post.tags | join: ', ' }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
    {% assign pages_list = site.pages | where_exp: "item", "item.title != nil" %}
    {% for page in pages_list %}
      ,"{{ page.url | slugify }}": {
        "title": "{{ page.title | xml_escape }}",
        "author": "",
        "category": "page",
        "content": {{ page.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ page.url | xml_escape }}",
        "tags": ""
      }
    {% endfor %}
  };
</script>
<script src="{{ site.baseurl }}/assets/js/search.js"></script>