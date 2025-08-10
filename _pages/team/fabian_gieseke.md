---
layout: team_member
title: "Fabian Gieseke"
permalink: /team/fabian-gieseke/
subtitle: |+
  <div class="alert alert-info" role="alert">
  <i class="fas fa-house"></i>&nbsp;&nbsp;&nbsp;<b>Head of the <a href="https://mlde-lab.github.io">MLDE</a> group </b><br>
  <i class="fas fa-university"></i>&nbsp;&nbsp;<b>Professor (W3) at the <a href="https://www.wi.uni-muenster.de/">Department of Information Systems</a> of the <a href="https://www.uni-muenster.de/en/">University of Münster</a> (Germany)</b><br>
    <i class="fas fa-university"></i>&nbsp;&nbsp;<b>Associate Professor (part-time) at the <a href="https://di.ku.dk/english/">Department of Computer Science</a> of the <a href="https://www.ku.dk/en">University of Copenhagen</a> (Denmark)</b><br>
    <i class="fas fa-microscope"></i>&nbsp;&nbsp;<b>Large-Scale Machine Learning, Tiny Machine Learning, Applications (Remote Sensing, Energy Systems, ...)</b><br>
    <i class="fab fa-github"></i>&nbsp;&nbsp;<a href="https://github.com/gieseke" target="_blank"><b>GitHub</b></a>&nbsp;&nbsp;
    <i class="fab fa-linkedin"></i>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/fabian-gieseke/" target="_blank"><b>LinkedIn</b></a>&nbsp;&nbsp;
   <br>
  </div>
  
nav: false
filter_lastname: Gieseke

profile:
  name: Fabian Gieseke
  image: fabian_gieseke_rectangle.jpg
  image_cicular: false
  profile_image_class: profile-image
---

## Contact

<div style="display: flex; gap: 80px; flex-wrap: wrap;">

  <div>
    <b>University of Münster</b><br>
    Department of Information Systems<br>
    Room 233, Leonardo-Campus 3, 48147 Münster, Germany<br>
   <i class="fas fa-envelope"></i>&nbsp;&nbsp; 
    <a href="mailto:fabian&#46;gieseke AT uni-muenster&#46;de">
      fabian&#46;gieseke AT uni-muenster&#46;de
    </a>
  </div>

  <div>
    <b>University of Copenhagen</b><br>
    Department of Computer Science<br>
    Universitetsparken 1, DK-2100 Copenhagen, Denmark<br>
    <i class="fas fa-envelope"></i>&nbsp;&nbsp; 
    <a href="mailto:fabian&#46;gieseke AT di.ku&#46;dk">
      fabian&#46;gieseke AT di.ku.dk
    </a>
  </div>

</div>

<br>

## Bio

<div style="text-align: justify">
Fabian Gieseke is the head of the Machine Learning and Data Engineering group at the Department of Information Systems of the University of Münster. After having received his diploma degrees in Mathematics and in Computer Science from the University of Münster, and his Doctoral Degree in Computer Science from the University of Oldenburg, he was a postdoc at the University of Copenhagen (funded by the German Academic Exchange Service) and the Radboud University Nijmegen (funded by the Radboud Excellence Initiative), respectively, before he became a Tenure-Track Assistant Professor at the Department of Computer Science of the University of Copenhagen. He became Full Professor (W3) at the University of Münster in 2020 and is still affiliated with the University of Copenhagen. His research focus is on the efficient implementation of machine learning techniques using high-performance computing and specialized data structures and algorithms. He has worked together with domains experts from a variety of fields including remote sensing or modern energy systems.
</div>

<ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 30px;">
  <li><b>Full Professor (W3)</b>, Department of Information Systems, University of Münster (Germany), 2020-today.</li>
  <li><b>Associate Professor (part-time)</b>, Department of Computer Science, University of Copenhagen (Denmark), 2021-today.</li>
  <li><b>Assistant Professor (Tenure-Track)</b>, Department of Computer Science, University of Copenhagen (Denmark), 2016-2021.</li>
  <li><b>Postdoctoral Researcher</b>, Institute for Computing and Information Sciences (iCIS), Radboud University Nijmegen (Netherlands), 2014-2016.</li>
  <li><b>Postdoctoral Researcher</b>, Department of Computer Science, University of Copenhagen (Denmark), 2013-2014.</li>
  <li><b>Postdoctoral Researcher</b>, Department of Computer Science, University of Oldenburg (Germany), 2012-2013.</li>
  <li><b>Doctoral Degree (Dr. rer. nat.)</b>, Department of Computer Science, University of Oldenburg, Germany, 2006-2012</li>
  <li><b>Diploma in Mathematics (<i>with honors/distinction</i>)</b>, University of Münster, Germany, 2001-2006</li>
  <li><b>Diploma in Computer Science</b>, University of Münster, Germany, 2001-2006</li>
</ul>

<br>

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


