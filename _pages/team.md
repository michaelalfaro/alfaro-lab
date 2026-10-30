---
title: "Alfaro Lab - Team"
layout: gridlay
description: "People in the Alfaro Lab at UCLA: Michael Alfaro, graduate students, former postdocs, alumni, and visitors."
excerpt: "Alfaro Lab: Team members"
permalink: /team/
---

# Group Members

 **We are looking for new PhD and Masters students to join the team, and we welcome postdoctoral fellowship applicants** [(see openings)]({{ site.baseurl }}/vacancies/).

## Principal Investigator

<div class="row">
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/alfaro.jpg" class="img-responsive" width="25%" style="float: left" alt="Michael Alfaro" />
  <h3 class="member-name">Michael Alfaro</h3>
  <i>Professor and Chair, Ecology & Evolutionary Biology<br>
  email: <michaelalfaro@ucla.edu><br>
  [UCLA faculty page](https://www.eeb.ucla.edu/indivfaculty/?faculty=Alfaro)</i>
  <br>
  <a href="{{ site.url }}{{ site.baseurl }}/assets/AlfaroCV.pdf" class="btn btn-primary btn-sm" style="background-color: #004B87; border-color: #004B87; margin-top: 8px;"><i class="glyphicon glyphicon-download-alt"></i> Download CV</a>
</div>
</div>

## Graduate Students
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" alt="{{ member.name }}" />
  <h3 class="member-name">{{ member.name }}</h3>
  <i markdown="1">{{ member.info }}{% if member.email != "" %}<br>email: <{{ member.email }}>{% endif %}{% if member.website %}<br>[website]({{member.website}}){% endif %}
  </i>


  <ul style="overflow: hidden">
  
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}
  
  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}
  
  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}
  
  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}
  
  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}


## Former Postdocs
{% for member in site.data.former_postdocs %}
<div class="row">
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" alt="{{ member.name }}" />
  <h3 class="member-name">{{ member.name }}</h3>
  <i markdown="1">{{ member.info }}{% if member.now %}<br>Now {{ member.now }}{% endif %}{% if member.website %}<br>[website]({{ member.website }}){% endif %}</i>
  <br>
  {% if member.cv %}<a href="{{ site.url }}{{ site.baseurl }}/assets/{{ member.cv }}" class="btn btn-primary btn-sm" style="background-color: #004B87; border-color: #004B87; margin-top: 8px;"><i class="glyphicon glyphicon-download-alt"></i> Download CV</a>{% endif %}
</div>
<div class="col-sm-6">
  <p style="margin-top: 6px;">{{ member.blurb }}</p>
</div>
</div>
{% endfor %}


## Alumni
<table align="center" style="width:100%">
<tr><th>Graduate Students</th>
    <th>Postdocs</th> 
    <th>Undergraduates</th>
  </tr>
  <tr>
    <td>Tyler McCraney, PhD 2025</td>
    <td>Renata Pirani, 2023–2025</td>
    <td>David Cerny</td>
  </tr>
  <tr>
    <td>Mark Juhn, PhD</td>
    <td></td>
    <td>Chris Rice</td>
  </tr>
  <tr>
    <td>Mark Phuong, PhD</td>
    <td></td>
    <td>Jimmy Zheng</td>
  </tr>
  <tr>
    <td>Max Tolkoff, PhD (Biostatistics)</td>
    <td></td>
    <td>Mercien Venzon</td>
  </tr>
  <tr>
    <td>Princess Gilbert, PhD 2015</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Jonathan Chang, PhD 2017</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Janet Buckner, PhD 2017</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Liz Karan, PhD</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Laurie Sorenson, PhD 2015</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Tina Marcroft, PhD 2015</td>
    <td></td>
    <td></td>
  </tr>
</table>

## Lab Visitors

[Mathew McGee](https://research.monash.edu/en/persons/matt-mcgee/) (Monash), fall 2017

[Peter Cowman](https://www.museum.qld.gov.au/collections-and-research/staff-profiles/dr-peter-cowman) (ARC Centre of Excellence, Coral Reef Studies), fall 2017

[Fabio Roxo](https://scholar.google.com/citations?hl=en&user=D-sQauMAAAAJ&view_op=list_works&sortby=pubdate) (UNESP Botucatu), fall 2016

[Luz Eneida Ochoa Orrego](https://bv.fapesp.br/en/pesquisador/673173/) fall 2016
