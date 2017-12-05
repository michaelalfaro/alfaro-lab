---
title: "Alfaro Lab - Team"
layout: gridlay
excerpt: "Alfaro Lab: Team members"
sitemap: false
permalink: /team/
---

# Group Members

 **We are  looking for new PhD students, Postdocs, and Master students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **!**


<!-- Jump to [staff](#staff), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), [administrative support](#administrative-support), [lab visitors](#lab-visitors).

## Staff
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br>email: <{{ member.email }}></i>
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




## Master and Bachelor Students 
{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br>email: <{{ member.email }}></i>
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


## Alumni
<table align="center" style="width:100%">
<tr><th>Visitors</th>
    <th>Master Students</th> 
    <th>Bachelor Students</th>
  </tr>
  <tr>
    <td>Nikolaos Iliopoulos, Spring 2016</td>
    <td>Tjerk Benschop, Summer 2017</td>
    <td>Vishnu Saj, Spring 2017</td>
  </tr>
  <tr>
    <td>Vitaly Fedoseev, all of 2016</td>
    <td>Oliver Ostojic, Spring 2016</td>
    <td>Joey Braspenning, Spring 2017</td>
  </tr>
  <tr>
    <td></td>
    <td>Farshaad Hoeseni, Fall 2015</td>
    <td>Margot Leemker, Spring 2017</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Sietske Lensen, Spring 2017</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Alexander Vanstone, Spring 2016</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Tjerk Benschop, Spring 2016</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Arjo Andringa, Spring 2016</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Daniëlle van Klink, Spring 2016</td>
  </tr>
</table> -->

## Administrative Support
<a href="mailto:gracea@lifesci.ucla.edu">Grace Angus</a> is helping us (and other groups) with administration.

## Lab Guests

[Mathew McGee](https://research.monash.edu/en/persons/matt-mcgee) (Monash), fall 2017

[Peter Cowman](https://www.coralcoe.org.au/person/peter-cowman) (ARC Centre of Excelelnce, Coral Reef Studies), fall 2017

[Fabio Roxo](https://scholar.google.com/citations?hl=en&user=D-sQauMAAAAJ&view_op=list_works&sortby=pubdate) (UNESP Botucatu), fall 2016

[Luz Eneida Ochoa Orrego](http://scienti.colciencias.gov.co:8081/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000992542) () fall 2016

<!-- [Alexander Ako Khajetoorians](http://www.ru.nl/spm) (Radboud University), fall 2015

[Mohammad Hamidian](http://www.mhamidian.com) (Harvard->UC Davis), spring 2016

[Ivan Bozovic](https://www.bnl.gov/cmpmsd/mbe/default.asp) (BNL / Yale), spring 2016

[Freek Massee](http://www.fmassee.nl) (Paris), spring 2016

[Felix Baumberger](http://dqmp.unige.ch/baumberger/) (Geneva), spring 2016

[Jasper van Wezel](http://www.jvanwezel.com/) (UvA), summer 2016 -->
