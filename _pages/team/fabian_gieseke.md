---
layout: team_member
title: "Fabian Gieseke"
permalink: /team/fabian-gieseke/
subtitle: |+
  <div class="alert alert-info" role="alert">
  <i class="fas fa-briefcase"></i>&nbsp;&nbsp;&nbsp;<b>ML Research Lead at the <a href="https://iol.zib.de/learn">IOL Lab</a> of <a href="https://www.zib.de/">Zuse Institute Berlin</a></b><br>
  <i class="fas fa-graduation-cap"></i>&nbsp;&nbsp;<b>4th-year PhD candidate in Mathematics at <a href="https://www.tu.berlin/en/math">TU Berlin</a></b><br>  
  <i class="fas fa-graduation-cap"></i>&nbsp;&nbsp;<b>Advisor: <a href="http://www.pokutta.com/">Prof. Dr. Sebastian Pokutta</a></b>
  </div>

  <div class="alert alert-success" role="alert">
    <i class="fas fa-flask"></i> <b>We are hiring!</b> We are seeking motivated PhD students to work on Deep Learning. Reach out or directly apply <a href="http://iol.zib.de/openings" class="alert-link">here</a>!
  </div>
  
nav: false
filter_lastname: Gieseke

profile:
  name: Fabian Gieseke
  image: fabian_gieseke.png
  image_cicular: false
  profile_image_class: profile-image
---

# Fabian Gieseke
Professor of Machine Learning  
University of Münster

## Publications
{% include bib_search.liquid %}


<div class="publication-tags">
  <a href="#" class="btn btn-sm z-depth-0 active" role="button" data-tag="all">All</a>
  {% assign tags = site.data.publication_tags %}
  {% for tag in tags %}
    <a href="#{{ tag.tag }}" class="btn btn-sm z-depth-0" role="button" data-tag="{{ tag.tag }}">{{ tag.name }}</a>
  {% endfor %}
</div>

<div class="publications">
{% bibliography -f papers %}
</div>


