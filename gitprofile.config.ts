// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ShotSkydiver', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ShotSkydiver/Notebowl-Mobile', 'ShotSkydiver/Ambi-Mobile', 'ShotSkydiver/CustomCover', 'ShotSkydiver/SpotifyRedesign', 'ShotSkydiver/QSPulldownTweak', 'ShotSkydiver/CorePump-Workouts', 'ShotSkydiver/MathAlarm'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Client Websites',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'StepBuilder',
          description:
            'StepBuilder site for law firm.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://stepbuilder.connerowen.me',
        },
        {
          title: 'J White Designs',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://jwhitedesigns.connerowen.me',
        },
      ],
    },
  },
  seo: { title: 'Conner Owen Portfolio', description: '', imageURL: '' },
  social: {
    linkedin: 'chdowen',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'chd.owen',
    reddit: '',
    threads: '',
    youtube: 'infiniteloopstudios', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://connerowen.me',
    phone: '(623) 980-8340',
    email: 'chdowen@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React/React Native',
    'Node.js',
    'Python',
    'Django',
    'MySQL',
    'Swift',
    'Java',
    'Kotlin',
    'Objective-C/C#',
    'HTML/CSS',
    'PHP',
    'Laravel',
  ],
  experiences: [
    {
      company: 'Right Angle Engineering',
      position: 'Senior Full-Stack Software Engineer',
      from: 'June 2021',
      to: 'October 2025',
      companyLink: 'https://rightangleeng.com',
    },
    {
      company: 'Ambi',
      position: 'Full-Stack Software Engineer',
      from: 'July 2019',
      to: 'June 2021',
      companyLink: 'https://web.archive.org/web/20211204045427/https://ambi.world/',
    },
    {
      company: 'Notebowl',
      position: 'Junior Software Engineer',
      from: 'September 2017',
      to: 'October 2019',
      companyLink: 'https://web.archive.org/web/20180625064822/https://notebowl.com/',
    },
  ],
  certifications: [
    {
      name: 'Gremlin',
      body: 'Gremlin Chaos Engineering Certified',
      year: 'December 2025',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Arizona State University',
      degree: 'Bachelor (Unfinished)',
      from: '2012',
      to: '2015',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'silk',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
