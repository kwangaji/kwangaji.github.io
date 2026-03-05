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
  },{id: "nav-projects",
          title: "projects",
          description: "A collection of projects from my research, coursework, and personal work",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-sparkles-our-paper-maskadapt-has-been-accepted-to-cvpr-2026-smile",
          title: ':sparkles: Our paper MaskAdapt has been accepted to CVPR 2026! :smile:',
          description: "",
          section: "News",},{id: "news-microphone-i-will-be-presenting-situately-as-a-research-demo-at-ieee-vr-2026-sparkles",
          title: ':microphone: I will be presenting Situately as a Research Demo at IEEE VR...',
          description: "",
          section: "News",},{id: "projects-lyric-transcription-in-noisy-environments",
          title: 'Lyric Transcription in Noisy Environments',
          description: "explores how to make lyric transcription actually work in noisy, real-world audio — café recordings, concert clips, and phone-captured music. (GCT 634 Musical Applications of Machine Learning Project)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-winter-in-manseokdong",
          title: 'Winter in Manseokdong',
          description: "A short film about JUN, a 12-year-old Korean girl who lives in a slum and her confused feelings towards life and death (Indie Short Fest Award Winner)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-spatial-cognition-and-block-building",
          title: 'Spatial Cognition and Block Building',
          description: "Developed a Unity-based virtual block-building game to evaluate infants’ spatial reasoning, replicating a study from the Language and Cognition Lab at Johns Hopkins University (advised by Dr. Anand Malpani)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-grasp",
          title: 'GRASP',
          description: "A training-free LLM system that learns from each session to make FPS games clearer, gentler, and easier for older adults to play. (Game Society and Culture Project)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
