import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    facebook,
    instagram,
    linkedin,
    githubFooter,
    coforge,
    vpt,
    PaidSearchMonitoring,
    WebContentMonitoring,
    live,
    firebase,
    puppeteer,
    mysql,
    question

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id:'tech',
      title:'Tech'
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "mysql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "React Js Developer/Full Stack(MERN)",
      company_name: "------------",
      icon: question,
      iconBg: "#383E56",
      date: "Looking for Opportunity",
      points: [
        "Experties in React Js and similar technologies for developing web application.",
        "Having 4 + year of experience in SDLC and STLC for devloping, testing and maintaing application.",
        "Currently learning React Three fiber for 3d modeling in React.",
        "Looking for new oppertunity where i can use my knowledge and gain some new."

      ],
    },
    {
      title: "Web Automation Engineer",
      company_name: "Virus Positive Technologies",
      icon: vpt,
      iconBg: "#383E56",
      date: "Oct 2020 - Aug 2023",
      points: [
        "Developing and maintaining web applications using Angular, Node Js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developed and maintained two automaion product for content monitoring and web scraping.",
        "Involded in code testing and deploying better code."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Coforge formerly NIIT",
      icon: coforge,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Jun 2020",
      points: [
        "Learn latest technology and tool about web and web automaton.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Paid Search Monitoring",
      description:
        "Web-based platform that allows Companies/Brands to eliminate trademark infringing ads by your competitors, affiliates, resellers, and search arbitragers on the paid search with PPC brand monitoring.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "Node Js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "puppeteer",
          color: "red-text-gradient",
        },
      ],
      image: PaidSearchMonitoring,
      source_code_link: "https://thepaidclick.com/products/paid-search-monitoring",
    },
    {
      name: "Web Content Monitoring",
      description:
        "Web application that enables companies and brands in comprehensive monitoring of the content and promotional offers across the web for your regulatory & brand compliance.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "warc",
          color: "red-text-gradient",
        },
      ],
      image: WebContentMonitoring,
      source_code_link: "https://thepaidclick.com/products/web-content-monitoring",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];

  const socialNetworks =[
    {
      logo:githubFooter,
      link:'https://github.com/roshanronan/roshanronan/blob/main/README.md',
      name:'Github'
    },
    {
      logo:linkedin,
      link:'https://www.linkedin.com/in/roshan-7b7525165/',
      name:'Linkedin'
    },
    {
      logo:instagram,
      link:'https://www.instagram.com/roshan_ronan/',
      name:'Instagram'
    }
  ]
  
  export { services, technologies, experiences, testimonials, projects,socialNetworks };