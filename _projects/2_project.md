---
layout: project
title: Energy- and resource-efficient artificial intelligence for modern IoT applications
acronym: TinyAIoT
description:
img: assets/img/projects/2/tinyaiot_logo_preview.png
importance: 1
category: ongoing
related_publications: false
project_filter_publications: tinyaiot
breadcrumb:
  - title: projects
    url: /projects/
  - title: TinyAIoT

funding:
  - name: BMUKN
    url: https://www.bundesumweltministerium.de/en/
    logo: assets/img/projects/2/logo_en.svg

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
  - name: Jan Stenkamp
    image: jan_stenkamp.jpg
    image_circular: false
    role: Doctoral Candidate
  - name: Dr. Nina Herrmann
    image: nina_herrmann.jpg
    image_circular: false
    role: Postdoc
---

{% include project_box.html
   variant="info"
   icon="fas fa-project-diagram"
   title=page.title
   abstract="The rapid growth of the Internet of Things fueled the design of devices that are based on microcontrollers, equipped with sensors, and capable of exchanging data. These devices - used, e.g., in smart home applications or to build environmental monitoring stations - enable the collection and analysis of large amounts of data and the development of potentially powerful applications. However, applications are currently limited by the need to exchange collected data via cloud services to use state-of-the-art AI processes, which consumes significant resources in the form of energy, material, and bandwidth. The aim of the TinyAIoT project is to reduce these resource requirements by developing efficient and tiny AI models that can be used on the microcontrollers themselves. This not only extends the range of possible use cases to more powerful applications, but also reduces the required bandwidth of applications, enabling microcontrollers to operate autonomously for several weeks to years.<br><br>This project is funded by the [Federal Ministry for the Environment, Climate Action, Nature Conservation, and Nuclear Safety (BMUKN)](https://www.bundesumweltministerium.de/en/) and expires on December 31, 2025. The project is carried out as a joint project between the [University of Münster](https://www.uni-muenster.de/en/) and the [Reedu GmbH & Co. KG](https://sensebox.de/en/research-tinyaiot.html).
   "
   acronym="TinyAIoT"
   timeframe="01/2023 – 12/2025"
   funding=page.funding
%}

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
	{% include figure.liquid loading="eager" path="assets/img/projects/2/smart_trashcan_setup.png" title="Smart Trashbin" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
	{% include figure.liquid loading="eager" path="assets/img/projects/2/personenzaehler.png" title="Counting Persons" class="img-fluid rounded z-depth-1"  %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
	{% include figure.liquid loading="eager" path="assets/img/projects/2/tof_takeovers.png" title="Smart Takeovers" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-12 justify mt-4 mb-4">
The main goal of the TinyAIoT project is to further reduce the resource requirements of existing implementations and to adapt further AI models accordingly. In particular, the resource and energy requirements are to be reduced to such an extent that the underlying microcontrollers can be operated autonomously by means of batteries over a longer period of time. A special focus shall be on the special combination of microcontrollers of the Arduino family and the LoRaWAN network protocol (e.g. very small main memory and limited bandwidth of LoRaWAN). The results will eventually be used to adapt and extend the senseBox and associated sensor networks, leading to a 'smart' version of the senseBox -the TinyAI-senseBox- that can be operated autonomously for longer periods of time Combination
</div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
	{% include figure.liquid loading="eager" path="assets/img/projects/2/wiediversistmeingarten.jpg" title="Birdiary" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
The TinyAIoT project was partly inspired by the existing <a href="https://wiediversistmeingarten.org">Birdiary</a> project.
</div>
