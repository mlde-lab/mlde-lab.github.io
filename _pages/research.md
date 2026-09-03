---
layout: page
permalink: /research/
title: research
nav: true
nav_order: 6
breadcrumb:
  - title: research

_styles: |
  .research-row {
    align-items: center;
    margin-top: 0.75rem;
    margin-bottom: 0.65rem;
  }
  .research-media figure {
    margin: 0;
  }
  .research-media img {
    width: 100%;
    max-height: 26rem;
    object-fit: contain;
  }
  .research-wide-media img {
    max-height: none;
  }
  .research-media-80 figure {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
  .research-media-90 figure {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
  .research-caption {
    margin-top: 0.15rem;
    color: var(--global-text-color-light);
    font-size: 0.82rem;
    line-height: 1.35;
    text-align: center;
  }
  .research-publications {
    width: 100%;
    margin: 0 0 1.75rem;
    padding-left: 1.35rem;
    font-size: 1rem;
    line-height: 1.5;
  }
  .research-publications li {
    margin-bottom: 0.45rem;
  }
  .research-project-link {
    white-space: nowrap;
  }
  @media (max-width: 767.98px) {
    .research-row {
      margin-bottom: 0.65rem;
    }
    .research-copy {
      margin-top: 0.85rem;
    }
  }
---

{% include project_box.html
   variant="info"
   icon="fas fa-microchip"
   title="Machine Learning and Data Engineering"
   abstract="Our research connects machine learning and data engineering to make AI models useful under real-world constraints on resources, data, and computing systems. We design learning methods by considering data access, computing architecture, and available resources together from the outset. This perspective spans efficient access to very large data collections, scalable execution on high-performance systems, and compact models for edge and TinyML hardware. Current funded projects include [AI4Forest](/projects/1_project/) and [TinyAIoT](/projects/2_project/)."
%}

## Large-Scale Machine Learning

<div class="row research-row">
  <div class="col-md-7 research-media">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/decision_branches.png" title="Index-aware search by classification" class="img-fluid rounded" %}
    <div class="research-caption">Index-aware models turn inference into efficient multidimensional range queries.</div>
  </div>
  <div class="col-md-5 research-copy justify">
    <p>Many large-scale applications are limited less by a model's arithmetic than by data access and movement. We therefore couple learning methods with index structures, storage systems, and execution pipelines.</p>
    <p>In <em>search-by-classification</em>, a small number of examples describe the objects a user wants to retrieve. Our index-aware decision trees translate inference into range queries, enabling interactive searches across billions of objects. RapidEarth applies this idea to satellite-image archives, while CLIP-Branches combines it with interactive fine-tuning of multimodal models.</p>
  </div>
</div>
<ul class="research-publications">
  <li><a href="https://arxiv.org/abs/2406.13322">Lülf et al. (2024). <em>CLIP-Branches: Interactive Fine-Tuning for Text-Image Retrieval.</em> Proceedings of the 47th International ACM SIGIR Conference on Research and Development in Information Retrieval, Demo Track. <strong>SIGIR 2024</strong>.</a></li>
  <li><a href="https://arxiv.org/abs/2309.15617">Lülf et al. (2023). <em>RapidEarth: A Search Engine for Large-Scale Geospatial Imagery.</em> Proceedings of the 31st International Conference on Advances in Geographic Information Systems, Demo Paper. <strong>SIGSPATIAL 2023</strong>.</a></li>
  <li><a href="https://arxiv.org/abs/2306.02670">Lülf et al. (2023). <em>Fast Search-By-Classification for Large-Scale Databases Using Index-Aware Decision Trees and Random Forests.</em> Proceedings of the VLDB Endowment, 16, 2845–2857. <strong>VLDB 2023</strong>.</a></li>
</ul>

<div class="row research-row">
  <div class="col-md-5 research-copy justify order-2 order-md-1">
    <p>Current research projects often process hundreds of terabytes of satellite observations. Here, transferring the data can become as important a bottleneck as computation. We develop trainable selection masks that identify and transfer only the parts of an input that matter for a task. For petabyte-scale archives, automated preselection can substantially reduce data movement and end-to-end inference time.</p>
    <p>This line of work directly supports the scalable Earth-observation pipelines developed in <a class="research-project-link" href="/projects/1_project/"><i class="fas fa-arrow-right" aria-hidden="true"></i> AI4Forest</a>.</p>
  </div>
  <div class="col-md-7 research-media research-media-80 order-1 order-md-2">
    {% include figure.liquid loading="lazy" path="assets/img/publication_preview/2022_selection_masks.png" title="Task-specific input selection" class="img-fluid rounded" %}
    <div class="research-caption">The prediction model and a task-specific selection mask are trained jointly.</div>
  </div>
</div>
<ul class="research-publications">
  <li><a href="https://arxiv.org/abs/1906.04673">Oehmcke &amp; Gieseke (2022). <em>Input Selection for Bandwidth-Limited Neural Network Inference.</em> Proceedings of the 2022 SIAM International Conference on Data Mining, 280–288. <strong>SDM 2022</strong>.</a></li>
  <li><a href="https://arxiv.org/abs/2406.01076">Pauls et al. (2024). <em>Estimating Canopy Height at Scale.</em> 41st International Conference on Machine Learning. <strong>ICML 2024</strong>.</a></li>
</ul>

## Tiny Machine Learning

<div class="row research-row">
  <div class="col-md-5 research-media">
    {% include figure.liquid loading="lazy" path="assets/img/tinyml_tiny_tree.png" title="TinyML sensor-data processing on a microcontroller" class="img-fluid rounded" %}
    <div class="research-caption">Sensor data is processed locally by a compact Tiny Tree model running on a microcontroller.</div>
  </div>
  <div class="col-md-7 research-copy justify">
    <p>TinyML brings training and inference to severely resource-constrained devices. Adapted training procedures and memory layouts reduce the resource requirements of boosted-tree models by factors of 4–16 while preserving predictive performance. Trainable quantization further reduces the sensor data that must be transmitted. Applications include privacy-preserving bicycle counting and energy-efficient bird-species recognition.</p>
    <p>These methods are developed and evaluated in the <a class="research-project-link" href="/projects/2_project/"><i class="fas fa-arrow-right" aria-hidden="true"></i> TinyAIoT project</a> and related environmental-monitoring initiatives such as <a href="https://wiediversistmeingarten.org/">Birdiary</a>.</p>
  </div>
</div>
<ul class="research-publications">
  <li><a href="https://openreview.net/forum?id=batDcksZsh">Herrmann et al. (2026). <em>Boosted Trees on a Diet: Compact Models for Resource-Constrained Devices.</em> The Fourteenth International Conference on Learning Representations. <strong>ICLR 2026</strong>.</a></li>
  <li>Schrödter et al. (2026). <em>Trainable Bitwise Soft Quantization for Input Feature Compression.</em> Third Conference on Parsimony and Learning. <strong>CPAL 2026</strong>.</li>
  <li>Kurkela et al. (2026). <em>TinyML for Environmental Monitoring: Bird Species Image Classification on Resource-Constrained Devices.</em> European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases, Applied Data Science Track. <strong>ECML PKDD 2026</strong>.</li>
</ul>

## Machine Learning and High-Performance Computing

<div class="row research-row">
  <div class="col-md-7 research-copy justify order-2 order-md-1">
    <p>Our work exploits the parallelism of modern many-core systems through hardware-aware algorithm design. Buffer <em>k</em>-d trees batch search requests for massively parallel nearest-neighbor search on GPUs. Instead of traversing a tree independently for every query, buffers collect queries at tree nodes and process them together. This reorganizes irregular control flow into large, hardware-friendly batches and improves memory access on GPUs.</p>
    <p>We have extended this perspective to data-intensive learning models and scientific pipelines, including parallel regression for satellite time series. In change detection, such methods can reduce computations over billions of time series from weeks or years to hours or days. The central principle is to co-design algorithms, memory movement, vectorization, and distributed execution for the target architecture.</p>
  </div>
  <div class="col-md-5 research-media research-media-90 order-1 order-md-2">
    {% include figure.liquid loading="lazy" path="assets/img/publication_preview/2014_bufferktdtree.png" title="Buffer k-d trees" class="img-fluid rounded" %}
    <div class="research-caption">Batched tree traversal enables efficient nearest-neighbor search on massively parallel hardware.</div>
  </div>
</div>
<ul class="research-publications">
  <li><a href="https://futhark-lang.org/publications/icde20.pdf">Gieseke et al. (2020). <em>Massively-Parallel Change Detection for Satellite Time Series Data with Missing Values.</em> Proceedings of the 36th IEEE International Conference on Data Engineering, 385–396. <strong>ICDE 2020</strong>.</a></li>
  <li><a href="https://arxiv.org/pdf/1802.06394">Gieseke &amp; Igel (2018). <em>Training Big Random Forests with Little Resources.</em> Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery &amp; Data Mining, 1445–1454. <strong>KDD 2018</strong>.</a></li>
  <li><a href="http://proceedings.mlr.press/v32/gieseke14.html">Gieseke et al. (2014). <em>Buffer k-d Trees: Processing Massive Nearest Neighbor Queries on GPUs.</em> Proceedings of the 31st International Conference on Machine Learning, 172–180. <strong>ICML 2014</strong>.</a></li>
</ul>

## Applications

Alongside our methodological research, we develop machine-learning techniques with experts from Earth observation, astrophysics, and other application domains.

### Earth Observation

<div class="research-media research-wide-media">
  {% include figure.liquid loading="lazy" path="assets/img/projects/1/canopy_height.png" title="Global canopy height estimation" class="img-fluid rounded" %}
  <div class="research-caption">Canopy height estimation from Sentinel-2 imagery and GEDI LiDAR observations.</div>
</div>
<div class="justify mt-3">
  <p>Our work ranges from detecting abrupt ecosystem changes and mapping individual trees and their carbon stocks to creating global, time-dependent canopy-height maps. We build efficient inference pipelines for petabyte-scale collections, develop foundation representations for environmental monitoring, and study predictive uncertainty through quantile regression.</p>
  <p>Much of this work is carried out within <a class="research-project-link" href="/projects/1_project/"><i class="fas fa-arrow-right" aria-hidden="true"></i> AI4Forest</a>; interactive results and further material are also available at <a href="https://ai4forest.eu">ai4forest.eu</a>.</p>
</div>
<ul class="research-publications">
  <li><a href="https://openreview.net/forum?id=JXCiQteuOv">Fayad et al. (2025). <em>DUNIA: Pixel-Sized Embeddings via Cross-Modal Alignment for Earth Observation Applications.</em> 42nd International Conference on Machine Learning. <strong>ICML 2025</strong>.</a></li>
  <li><a href="https://openreview.net/forum?id=ri1cs3vtXX">Pauls et al. (2025). <em>Capturing Temporal Dynamics in Large-Scale Canopy Tree Height Estimation.</em> 42nd International Conference on Machine Learning. <strong>ICML 2025</strong>.</a></li>
  <li><a href="https://arxiv.org/abs/2604.06988">Schrödter et al. (2026). <em>Canopy Tree Height Estimation using Quantile Regression: Modeling and Evaluating Uncertainty in Remote Sensing.</em> Twenty-Ninth Annual Conference on Artificial Intelligence and Statistics. <strong>AISTATS 2026</strong>.</a></li>
  <li><a href="https://doi.org/10.1038/s41558-024-02201-0">Bernardino et al. (2025). <em>Predictability of Abrupt Shifts in Dryland Ecosystem Functioning.</em> <strong>Nature Climate Change</strong>, 15, 86–91.</a></li>
</ul>

### Astrophysics

<div class="row research-row">
  <div class="col-md-8 research-copy justify order-2 order-md-1">
    <p>Astronomy and particle physics were important application areas in an earlier phase of our research. Modern sky surveys produce very large image and catalogue collections in which rare, scientifically relevant objects must be identified among millions or billions of observations. Manual inspection is therefore impossible, making accurate and scalable machine-learning pipelines essential.</p>
    <p>For astronomical surveys, we developed nearest-neighbor methods for photometric redshift estimation and for discovering previously unknown high-redshift quasars. We also designed convolutional neural networks that distinguish genuine transient events from imaging artefacts and thereby reduce the number of candidates requiring expert review. These projects established our focus on scalable inference, efficient candidate selection, and close collaboration with domain scientists.</p>
  </div>
  <div class="col-md-4 research-media order-1 order-md-2">
    {% include figure.liquid loading="lazy" path="assets/img/publication_preview/2013_quasars.png" title="High-redshift quasar search" class="img-fluid rounded" %}
    <div class="research-caption">Nearest-neighbor methods support the search for distant high-redshift quasars.</div>
  </div>
</div>
<ul class="research-publications">
  <li><a href="https://arxiv.org/abs/1708.08947">Gieseke et al. (2017). <em>Convolutional Neural Networks for Transient Candidate Vetting in Large-Scale Surveys.</em> Monthly Notices of the Royal Astronomical Society, 472, 3101–3114. <strong>MNRAS</strong>.</a></li>
  <li><a href="https://arxiv.org/abs/1210.7071">Polsterer, Zinn &amp; Gieseke (2013). <em>Finding New High-Redshift Quasars by Asking the Neighbours.</em> Monthly Notices of the Royal Astronomical Society, 428, 226–235. <strong>MNRAS</strong>.</a></li>
</ul>

### Smart Cities and Smart Grids

<div class="row research-row">
  <div class="col-md-5 research-media">
    {% include figure.liquid loading="lazy" path="assets/img/smart_city_grid.png" title="Connected infrastructure in a smart grid" class="img-fluid rounded" %}
    <div class="research-caption">Smart grids connect renewable generation, storage, buildings, industry, and electric mobility.</div>
  </div>
  <div class="col-md-7 research-copy justify">
    <p>Smart cities and smart grids combine distributed sensing, local intelligence, and networked infrastructure. Our research addresses forecasting for increasingly dynamic energy systems: the growing share of weather-dependent renewable generation makes energy supply more volatile, while electricity demand varies across time, locations, and consumer groups. We use state-of-the-art machine-learning techniques to obtain accurate forecasts of renewable-energy production and energy demand from historical measurements, weather information, calendar effects, and other contextual signals. These forecasts can support grid operation, flexibility planning, and the reliable coordination of generation, storage, and consumption.</p>
  </div>
</div>

<div class="justify mt-3">
  <p>For distributed smart-city sensing systems, we develop compact models that process data close to where it is collected and transmit only the results. This reduces bandwidth and energy consumption while supporting privacy-aware monitoring and timely decisions. One application is the monitoring of bicycle-parking facilities: a camera-equipped ESP32-S3 microcontroller runs a compressed object-detection model locally and sends only the resulting bicycle count via LoRaWAN to a remote service.</p>
</div>

<div class="research-media research-wide-media research-media-80">
  {% include figure.liquid loading="lazy" path="assets/img/smart_city_bicycle_counting.png" title="Edge-AI pipeline for counting parked bicycles" class="img-fluid rounded" %}
  <div class="research-caption">Images are processed on the microcontroller; only the detected bicycle count is transmitted to the monitoring service.</div>
</div>
<ul class="research-publications">
  <li><a href="https://doi.org/10.1145/3774906.3802788">Stenkamp et al. (2026). <em>Counting Parked Bicycles on the Edge — A TinyML Smart City Application.</em> ACM/IEEE International Conference on Embedded Artificial Intelligence and Sensing Systems. <strong>SenSys 2026</strong>.</a></li>
</ul>
