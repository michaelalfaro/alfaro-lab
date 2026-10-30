---
title: "Alfaro Lab - Publications"
layout: gridlay
description: "Publications and preprints from the Alfaro Lab at UCLA on fish phylogenetics, macroevolution, diversification, and color evolution."
excerpt: "Alfaro Lab -- Publications."
permalink: /publications/
---

# Publications

My publications are also listed on [Google Scholar <i class="fas fa-external-link-alt"></i>](https://scholar.google.com/citations?user=_wlHRTUAAAAJ&hl=en){:target="_blank" onclick="trackCV()"} and [ORCID <i class="fas fa-external-link-alt"></i>](https://orcid.org/0000-0002-8898-8230){:target="_blank" onclick="trackCV()"}.

<div class="form-group" style="max-width: 460px;">
  <label for="pub-filter" class="sr-only">Filter publications</label>
  <input type="search" id="pub-filter" class="form-control" placeholder="Filter by author, title, journal, or year" autocomplete="off">
</div>
<script>
document.addEventListener('DOMContentLoaded', function () {
  var box = document.getElementById('pub-filter');
  if (!box) { return; }
  var items = Array.prototype.slice.call(document.querySelectorAll('ol.bibliography > li'));
  var headings = Array.prototype.slice.call(document.querySelectorAll('#gridid h2'));
  box.addEventListener('input', function () {
    var q = box.value.trim().toLowerCase();
    items.forEach(function (li) {
      li.style.display = (!q || li.textContent.toLowerCase().indexOf(q) !== -1) ? '' : 'none';
    });
    headings.forEach(function (h) {
      var list = h.nextElementSibling;
      while (list && list.tagName !== 'OL') { list = list.nextElementSibling; }
      if (!list) { return; }
      var anyVisible = Array.prototype.some.call(list.children, function (li) { return li.style.display !== 'none'; });
      h.style.display = anyVisible ? '' : 'none';
    });
  });
});
</script>

## Preprints

{% bibliography --query @unpublished %}

## Publications

{% bibliography --query @article %}

<!-- Altmetric badges are loaded dynamically by publications-enhanced.js -->
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