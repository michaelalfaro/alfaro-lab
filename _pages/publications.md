---
title: "Alfaro Lab - Publications"
layout: gridlay
excerpt: "Alfaro Lab -- Publications."
sitemap: false
permalink: /publications/
---

# Publications

My publications are also listed on [Google Scholar <i class="fas fa-external-link-alt"></i>](https://scholar.google.com/citations?user=_wlHRTUAAAAJ&hl=en){:target="_blank" onclick="trackCV()"} and [ORCID <i class="fas fa-external-link-alt"></i>](https://orcid.org/0000-0002-8898-8230){:target="_blank" onclick="trackCV()"}.

[<i class="fas fa-search"></i> Search Publications]({{ site.url }}{{ site.baseurl }}/search/?query=publication){:.btn .btn-primary .float-right}

## Recent Publications

{% bibliography --max 10 %}

## All Publications

{% bibliography %}

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