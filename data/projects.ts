interface ProjectType {
  title: string;
  description: string;
  image: string;
}

interface ProjectsHashType {
  [key: string]: ProjectType[];
}

const projects: ProjectsHashType = {
  'web-design': [
    {
      title: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses',
      image: '/web-design/desktop/image-express.jpg',
    },
    {
      title: 'Transfer',
      description:
        'Site for low-cost money transfers and sending money within seconds',
      image: '/web-design/desktop/image-transfer.jpg',
    },
    {
      title: 'Photon',
      description:
        'A state-of-the-art music player with high-resolution audio and DSP effects',
      image: '/web-design/desktop/image-photon.jpg',
    },
    {
      title: 'Builder',
      description:
        'Connects users with local contractors based on their location',
      image: '/web-design/desktop/image-builder.jpg',
    },
    {
      title: 'Blogr',
      description:
        'Blogr is a platform for creating an online blog or publication',
      image: '/web-design/desktop/image-blogr.jpg',
    },
    {
      title: 'Camp',
      description:
        'Get expert training in coding, data, design, and digital marketing',
      image: '/web-design/desktop/image-camp.jpg',
    },
  ],
  'app-design': [
    {
      title: 'Airfilter',
      description:
        'Solving the problem of poor indoor air quality by filtering the air',
      image: '/app-design/desktop/image-airfilter.jpg',
    },
    {
      title: 'Eyecam',
      description:
        'Product that lets you edit your favorite photos and videos at any time',
      image: '/app-design/desktop/image-eyecam.jpg',
    },
    {
      title: 'Faceit',
      description:
        'Get to meet your favorite internet superstar with the faceit app',
      image: '/app-design/desktop/image-faceit.jpg',
    },
    {
      title: 'Todo',
      description:
        'A todo app that features cloud sync with light and dark mode',
      image: '/app-design/desktop/image-todo.jpg',
    },
    {
      title: 'Loopstudios',
      description: 'A VR experience app made for Loopstudios',
      image: '/app-design/desktop/image-loopstudios.jpg',
    },
  ],
  'graphic-design': [
    {
      title: 'Tim Brown',
      description:
        'A book cover designed for Tim Brown???s new release, ???Change???',
      image: '/graphic-design/desktop/image-change.jpg',
    },
    {
      title: 'Boxed Water',
      description: 'A simple packaging concept made for Boxed Water',
      image: '/graphic-design/desktop/image-boxed-water.jpg',
    },
    {
      title: 'Science!',
      description:
        'A poster made in collaboration with the Federal Art Project',
      image: '/graphic-design/desktop/image-science.jpg',
    },
  ],
};

export default projects;
