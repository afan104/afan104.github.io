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
          description: "A selection of side projects spanning backend systems, cloud infrastructure, and computer vision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Live GitHub stats and a few repositories worth a closer look.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Please click the PDF icon to the right to view Resume.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-kubernetes-secret-rotation-operator",
          title: 'Kubernetes Secret Rotation Operator',
          description: "Java 21 Kubernetes operator for scheduled secret rotation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-url-shortener",
          title: 'URL Shortener',
          description: "FastAPI URL shortener on AWS, provisioned with Terraform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-eyem-watching-you-eye-tracking-to-mousepad",
          title: 'Eyem Watching You - Eye Tracking to Mousepad',
          description: "Real-time eye-tracking mouse controller",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-cellseg-maskrcnn-low-light-microscopy-instance-segmentation",
          title: 'CellSeg-MaskRCNN - Low-Light Microscopy Instance Segmentation',
          description: "Mask R-CNN pipeline for cell instance segmentation in noisy microscopy data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-pantry-search",
          title: 'Pantry Search',
          description: "Go + Gin backend for tracking pantry inventory and searching what you can cook",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
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
