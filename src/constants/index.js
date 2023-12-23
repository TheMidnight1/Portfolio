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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import softnep from '../assets/company/softnep.png'
import laravel from '../assets/tech/laravel.png';
import django from '../assets/tech/django.png';
import spring from '../assets/tech/spring.png';





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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Laravel Developer",
    icon: web,
  },
  {
    title: "Django Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Java Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "spring",
    icon: spring,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "laravel",
    icon: laravel,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "SoftNEP",
    icon: softnep,
    iconBg: "#383E56",
    date: "December 2023 - Ongoing",
    points: [
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
      "I thought it was impossible to make a website as beautiful as our product, but Saugat proved me wrong.",
    name: "Palisa Manandhar",
    designation: "CFO",
    company: "Acme Co",
    image: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/402026774_1541888983013280_5616070620545153664_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=jFS0QlmFRT8AX_iaYjH&_nc_ht=scontent.fktm8-1.fna&oh=00_AfCc4G4IyPIZxUy6bBiZ1RQnzc9cnY6mZf1cX7HePf5wwQ&oe=658C9E30",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Saugat does.",
    name: "Sudarshan Bhandari",
    designation: "COO",
    company: "DEF Corp",
    image: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-1/160554798_255785502691618_75074302211227048_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=0222cc&_nc_ohc=uYqGgCWRAXUAX8nqIIt&_nc_ht=scontent.fktm8-1.fna&oh=00_AfBBx2u1VRadq5vMxQUzvT5wujq_b9Y1ddqMRcNivfSUcg&oe=65AE6A59",
  },
  {
    testimonial:
      "After Saugat optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Avishek Rokka",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/403986616_866596815023060_3879687675377624817_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=cE3ROvo3K3AAX8osufF&_nc_oc=AQmIwzow8j26avB3DwEV7OqXZbVkVjbaMC0tgiXLMf3DZVjorsUa7vTsLsvEtpSmcQeeMbmoriNAlbsIRsofshE4&_nc_ht=scontent.fktm8-1.fna&oh=00_AfBU_MXlKkwvgvuxSiHnl2tGhm-qwu1iCc_gnG6Kj4D6VQ&oe=658C75ED",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
    "An e-commerce platform leveraging Machine Learning (ML) for recommendation systems offers personalized product suggestions based on user behavior, preferences, and historical data.",
    tags: [
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/TheMidnight1/thriftstore",
  },
  {
    name: "Content Management System",
    description:
    "Our CMS enables seamless user management by facilitating user addition, role assignment, and page creation. Effortlessly navigate user roles, assign permissions, and generate content-rich pages, streamlining the content management process.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Jquery",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/TheMidnight1/Content-Management-System",
  },
  {
    name: "Gym Management System",
    description:
    "Streamlining gym operations, our management system offers efficient membership handling, scheduling, and workout tracking. Seamlessly manage memberships, schedules, and progress, empowering fitness centers to optimize client experiences.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Jquery",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/TheMidnight1/Gym-management-System",
  },
];

export { services, technologies, experiences, testimonials, projects };