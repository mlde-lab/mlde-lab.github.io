---
layout: page
permalink: /publications/
title: publications
description: This page lists peer-reviewed publications and preprints by the MLDE members.
nav: true
nav_order: 6

breadcrumb:
  - title: publications
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

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
