---
title: "Alfaro Lab - News"
layout: textlay
excerpt: "News from the Alfaro Lab at UCLA"
description: "News from the Alfaro Lab at UCLA: new papers, degrees, awards, and lab members."
permalink: /allnews.html
---

# News

{% for article in site.data.news %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
