// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "team",
          description: "The MLDE group brings together researchers from various disciplines such as information systems, computer science, mathematics, and geoinformatics, to tackle complex problems in data-driven research. By combining expertise in machine learning, algorithms, data engineering, and application domains, we develop innovative solutions that bridge theoretical foundations with practical applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "This page lists peer-reviewed publications and preprints by the MLDE members.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "This page gives an overview of ongoing and completed research projects, both including collaborations with academic partners and collaborations with industry.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-webpage-is-online-sparkles-smile",
          title: 'New webpage is online! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-we-have-had-a-great-time-at-icml-2025-this-year-with-two-papers-being-presented",
          title: 'We have had a great time at ICML 2025 this year with two...',
          description: "",
          section: "News",},{id: "projects-ai-based-high-resolution-forest-monitoring",
          title: 'AI-Based High-Resolution Forest Monitoring',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-energy-and-resource-efficient-artificial-intelligence-for-modern-iot-applications",
          title: 'Energy- and resource-efficient artificial intelligence for modern IoT applications',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},];
