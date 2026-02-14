---
title: "Alfaro Lab - Publications"
layout: gridlay
excerpt: "Alfaro Lab -- Publications."
sitemap: false
permalink: /publications/
---

<div class="publications-header">
  <h1>Publications</h1>
  
  <div class="row">
    <div class="col-md-8">
      <p>My publications are also listed on <a href="https://scholar.google.com/citations?user=_wlHRTUAAAAJ&hl=en" target="_blank" onclick="trackCV()">Google Scholar <i class="fas fa-external-link-alt"></i></a> and <a href="https://orcid.org/0000-0002-8898-8230" target="_blank" onclick="trackCV()">ORCID <i class="fas fa-external-link-alt"></i></a>.</p>
    </div>
    <div class="col-md-4 text-right">
      <a href="{{ site.url }}{{ site.baseurl }}/search/?query=publication" class="btn btn-primary">
        <i class="fas fa-search"></i> Search Publications
      </a>
    </div>
  </div>
</div>

## Recent Publications

<div class="recent-publications">
{% bibliography --max 10 %}
</div>

## All Publications

<div class="all-publications">
{% bibliography %}
</div>

<!-- Enhanced Publication Styling and Features -->
<style>
.publications-header {
  margin-bottom: 30px;
}

.bibliography {
  margin-bottom: 30px;
}

.bibliography li {
  padding: 15px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s ease;
  position: relative;
}

.bibliography li:hover {
  background-color: #f8f9fa;
}

.bibliography li:last-child {
  border-bottom: none;
}

/* Style DOI links */
.bibliography a[href*="doi.org"] {
  background-color: #007bff;
  color: white !important;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.85em;
  text-decoration: none;
  margin-left: 5px;
}

.bibliography a[href*="doi.org"]:hover {
  background-color: #0056b3;
}

/* Altmetric badge container */
.altmetric-container {
  float: right;
  margin-left: 10px;
  margin-top: 5px;
}

/* Publication year highlighting */
.bibliography .year {
  color: #f59e0b;
  font-weight: 600;
}

/* Author highlighting (if your name appears) */
.bibliography .author {
  font-weight: normal;
}

.bibliography .author:contains("Alfaro") {
  font-weight: 600;
  color: #1e3a8a;
}

@media (max-width: 768px) {
  .altmetric-container {
    float: none;
    margin: 10px 0;
  }
  
  .publications-header .col-md-4 {
    text-align: left;
    margin-top: 15px;
  }
}
</style>

<!-- Altmetric badges script -->
<script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>

<!-- Enhanced publication interaction tracking -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Track publication clicks
  document.querySelectorAll('.bibliography a').forEach(function(link) {
    link.addEventListener('click', function() {
      var title = this.closest('li').textContent.split('.')[0]; // Get first sentence as title
      if (typeof trackPublication === 'function') {
        trackPublication(title, 'Multiple Authors', new Date().getFullYear());
      }
    });
  });
  
  // Track publication search usage
  document.querySelectorAll('a[href*="search"]').forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof trackSearch === 'function') {
        trackSearch('publication search');
      }
    });
  });
  
  // Count and display publication stats
  var recentCount = document.querySelectorAll('.recent-publications .bibliography li').length;
  var totalCount = document.querySelectorAll('.all-publications .bibliography li').length;
  
  console.log('📚 Publications loaded: ' + totalCount + ' total, ' + recentCount + ' recent');
});
</script>
<!-- {% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>


## Full List

{% for publi in site.data.publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}

 -->