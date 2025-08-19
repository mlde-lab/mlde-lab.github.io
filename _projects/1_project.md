---
layout: project
acronym: AI4Forest
title: AI-Based High-Resolution Forest Monitoring
description: 
img: assets/img/projects/1/canopy_height_preview.jpg
importance: 1
category: ongoing
related_publications: true
project_filter_publications: ai4forest
breadcrumb:
  - title: projects
    url: /projects/
  - title: AI4Forest

funding:
  - name: BMBF
    url: https://www.bmbf.de
    logo: assets/img/projects/1/bmftr-logo-en.svg
  - name: DLR
    url: https://www.dlr.de
    logo: assets/img/projects/1/dlr-logo-en.svg
    
researchers:
  - name: Prof. Dr. Fabian Gieseke
    image: fabian_gieseke.jpg
    image_circular: false
    role: Principal Investigator
    url: /team/fabian-gieseke
    email: fabian.gieseke AT uni-muenster.de
    github: https://github.com/gieseke
    linkedin: https://www.linkedin.com/in/fabian-gieseke/
    google_scholar: https://scholar.google.com/citations?user=g3ZiieoAAAAJ&hl=de
  - name: Jan Pauls
    image: jan_pauls.jpg
    image_circular: false
    role: Doctoral Candidate
  - name: Jorunn Mense
    image: jorunn_mense.jpg
    image_circular: false
    role: Doctoral Candidate
---

{% include project_box.html
   variant="info"
   icon="fas fa-project-diagram"
   title=page.title 
   abstract="Preserving global vegetation is crucial for addressing and mitigating climate change. Accurate, up-to-date forest health data is essential. AI4Forest aims to develop advanced AI methods to monitor forests using satellite imagery, including radar and optical data. The project will create scalable techniques for detailed, high-resolution maps of the globe, e.g., to monitor canopy height, biomass, and to track forest disturbances. This project is funded by the [Federal Ministry of Research, Technology and Space](https://www.bmbf.de) and the [German Aerospace Center](https://www.dlr.de) (project ID 01IS23025B).<br><br> Please see the project website at [ai4forest.eu](https://ai4forest.eu) for more details.
   "
   acronym="AI4Forest"
   timeframe="01/2023 – 05/2027"
   funding=page.funding
%}


  


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
	{% include figure.liquid loading="eager" path="assets/img/projects/1/individual_trees.png" title="Detection of Individual Trees" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
	{% include figure.liquid loading="eager" path="assets/img/projects/1/canopy_height_comparison.png" title="Canopy Height Maps" class="img-fluid rounded z-depth-1"  %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
	{% include figure.liquid loading="eager" path="assets/img/projects/1/sdm.png" title="Data-Efficient Deep Learning" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-12 justify mt-4 mb-4">
Accurate and up-to-date information on global forest health, disturbances, evolution of above ground biomass and carbon storage is essential for policy-makers to design effective strategies for climate adaptation and mitigation. Advances in Earth observation and AI have paved the way for automated forest monitoring using satellite data, along with radar and LiDAR data. However, existing forest maps often have low resolution, cover limited areas or fail to track temporal dynamics.

The AI4Forest project brings together experts in AI, Applied Mathematics, Computer Science, Remote Sensing, and Climate Science, being a collaboration between the University of Münster, ZIB, TUM, LSCE, and CNRS. The project aims to develop scalable AI methods for forest monitoring and to efficiently and cost-effectively process large datasets. These advancements will enable the creation of detailed forest maps with high spatial and temporal resolution, down to individual trees and species, and allow for regular updates across Europe and globally.

</div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
	{% include figure.liquid loading="eager" path="assets/img/projects/1/canopy_height.png" title="Global Canopy Height Map" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
	    A global canopy height map based on a deep learning model.
</div>

