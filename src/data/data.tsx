import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
/* eslint-disable object-curly-spacing */
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Fernando Jimenez - Web Developer ',
  description: "Welcome to my personal website! I'm Fernando Jimenez, a passionate web developer specializing in creating dynamic and responsive web applications. Explore my portfolio to see my work and feel free to reach out for collaborations or inquiries.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Fernando Jimenez.`,
  description: (
<>
  <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
    I'm <strong className="text-stone-100">Fernando Jimenez</strong>, a passionate
    <strong className="text-stone-100"> Web Developer</strong> focused on building clean,
    user-friendly, and efficient web applications. This portfolio highlights the projects,
    experiences, and skills I've developed throughout my journey in software development.
  </p>
  <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
    I’m constantly learning, improving, and exploring new technologies. When I'm not coding,
    you’ll find me working on personal projects, expanding my knowledge, or discovering new ideas
    that inspire me to grow as a developer.
  </p>
</>

  ),
  actions: [
    {
      href: '/assets/Fernando Jimenez-2025-wd.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `   I’m a web developer with over 10 years of experience, specializing in WordPress and modern front-end development.
    I build custom WordPress solutions from the ground up, including fully custom PHP themes, MVC-style structures,
    and headless WordPress setups. I also have extensive experience working with the WordPress REST API (wp-json),
    ACF, and creating scalable, maintainable architectures that blend traditional CMS workflows with modern tools.

    Alongside my WordPress expertise, I work with React, Next.js, GitHub, npm, yarn, and component-driven development.
    I enjoy building modern interfaces, integrating JavaScript frameworks with WordPress, and refining development
    workflows using AI-assisted tools for faster iteration and cleaner code.

    I’m also highly efficient at improving performance and SEO, regularly boosting Lighthouse and Google PageSpeed
    scores through clean architecture, optimization best practices, and a strong focus on accessibility and UX.

    My approach combines the stability of WordPress with the innovation of modern frameworks, always with the goal
    of creating fast, user-focused digital experiences.
  `,
aboutItems: [
  {
    label: 'Primary Experience',
    text: 'Web Development & Front-End Engineering (10+ years)',
    Icon: AcademicCapIcon
  },
  {
    label: 'Front-End Skills',
    text: 'React, Next.js, Modern UI Components, JavaScript/TypeScript',
    Icon: SparklesIcon
  },
  {
    label: 'Architecture',
    text: 'Custom Builds, MVC Patterns, API-Driven & Headless Architectures',
    Icon: BuildingOffice2Icon
  },
  {
    label: 'APIs & Data',
    text: 'REST, JSON, JSON-LD (SEO), Webhooks, Data Modeling',
    Icon: MapIcon
  },
  {
    label: 'AI & Integrations',
    text: 'AI APIs, HuggingFace Models, Automation & AI-assisted Workflows',
    Icon: SparklesIcon
  },
  {
    label: 'User Testing',
    text: 'Usability Reviews, UX Feedback Loops, User-Centered Improvements',
    Icon: CalendarIcon
  },
  {
    label: 'Performance & SEO',
    text: 'Technical SEO, Schema Markup (JSON-LD), Core Web Vitals, Lighthouse Optimization',
    Icon: CalendarIcon
  },
  {
    label: 'Workflow & Tools',
    text: 'GitHub, Vite, Vercel, npm/yarn, CI/CD, Modern Dev Tooling',
    Icon: CalendarIcon
  },
  {
    label: 'Deployment & Hosting',
    text: 'Vercel, Netlify, Cloud Hosting, Build Optimization',
    Icon: BuildingOffice2Icon
  }
]


};



/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend & Build Tools',
    skills: [
      { name: 'PHP', level: 10 },
      { name: 'Advanced Custom Fields (ACF)', level: 10 },
      { name: 'Node.js / NPM / Yarn', level: 10 },
      { name: 'Gulp', level: 10 },
      { name: 'MVC Architecture', level: 10},
      { name: 'Git', level: 10},
    ],
  },
  {
    name: 'SEO & Analytics',
    skills: [
      { name: 'SEO (Technical & On-Page)', level: 10 },
      { name: 'Google Tag Manager (GTM)', level: 10 },
      { name: 'Google Analytics 4 (GA4)', level: 10 },
      { name: 'Ahrefs / SEMrush', level: 10 },
      { name: 'Data Layer / Event Tracking', level: 9 },
      { name: 'Lucky Orange / Heatmaps', level: 10 },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'WordPress (Custom themes & plugins)', level: 10 },
      { name: 'HTML5 / CSS3 / SCSS', level: 10 },
      { name: 'JavaScript (ES6+)', level: 10 },
      { name: 'React.js', level: 9 },
      { name: 'Vue.js', level: 9 },
      { name: 'Bootstrap', level: 10 },
      { name: 'jQuery', level: 9 },
      { name: 'Responsive / UX Design', level: 10 },
    ],
  },
  {
    name: 'Spoken Languages',
    skills: [
      { name: 'English', level: 10 },
      { name: 'Spanish', level: 10 },
    ],
  },
  {
    name: 'Other Development Skills',
    skills: [
      { name: 'CRMs / Webhooks / API Integrations', level: 8 },
      { name: 'Cloud Servers (Rackspace)', level: 6 },
      { name: 'Network & IT Troubleshooting', level: 6 },
    ],
  },
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'The Advocates Website National Website',
    description: 'A fully custom WordPress website built from scratch. I developed the front-end and back-end, turning designs into a fast, responsive, and SEO-optimized national homepage for the law firm.',
    url: 'https://www.theadvocates.com',
    image: porfolioImage1,
  },
  {
    title: 'The Advocates Utah Website',
    description: 'This site uses the same core template as the national site, but with many custom components and dynamic features. Each page type uses unique code, which allowed me to experiment with new technologies and improve performance and flexibility.',
    url: 'https://www.utahadvocates.com',
    image: porfolioImage2,
  },
  {
    title: 'Example of the backend of the Website',
    description: 'A look at the custom backend I built for our content team. I created clean, organized ACF fields and a simple UI that made it easy for non-technical writers to update pages without needing a developer.',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Express Records',
    description: 'A custom WordPress website built for a company that manages medical records and bills. I developed the layout, handled all integrations, and optimized the site for speed and user experience.',
    url: 'https://www.expressrr.com',
    image: porfolioImage4,
  },
  {
    title: ' Location Page',
    description: 'A content-heavy location page designed for strong SEO performance. I built the layout to handle large amounts of text and media while staying fully responsive and easy for the content team to update.',
    url: 'https://www.theadvocates.com/wyoming/gillette-personal-injury-lawyer/',
    image: porfolioImage5,
  },
  {
    title: 'Vue.js Attorney Page',
    description: 'A hybrid Vue.js and WordPress page that pulls attorney data through the WP JSON API. This project let me experiment with Vue inside a WordPress environment, creating a faster, more dynamic user experience.',
    url: 'https://www.theadvocates.com/attorneys/',
    image: porfolioImage6,
  },
  {
    title: 'Mivi AI Image Generator',
    description: 'A fun React project I built while experimenting with AI APIs and image generation. I created it to explore the capabilities of modern AI models, learn more about prompt engineering, and just enjoy building something creative. It’s a small passion project that shows how much I love working with new technology and pushing myself to learn more.',
    url: 'https://ai-mivi-aoo-8lxz.vercel.app/',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [
  {
    date: '2016 - 2025',
    location: 'The Advocates (Personal Injury Law Firm)',
    title: 'Full-Stack Web Developer & Web Manager',
    content: (
      <div className="text-black max-w-none">

        {/* Development Skills */}
        <h4 className="text-lg font-semibold mb-2 text-black">Development Skills</h4>
        <ul className="list-disc list-outside pl-6 space-y-3 text-black">
          <li>
            Built custom WordPress sites using PHP, MVC architecture, and modern tooling
            (Node.js, NPM, Yarn, Gulp). Created custom themes, plugins, and reusable components.
          </li>
          <li>
            Integrated modern JavaScript frameworks—including Vue.js and React—
            such as a Vue-based internal attorney directory application.
          </li>
          <li>
            Optimized front-end performance using SCSS, Tailwind CSS, and Bootstrap,
            consistently achieving high Google PageSpeed Insights and Lighthouse scores.
          </li>
          <li>
            Developed fully customized WordPress backends to streamline workflows for content writers
            and improve editorial processes.
          </li>
          <li>
            Diagnosed and resolved complex site issues, modernized legacy systems,
            improved security, and established long-term coding standards.
          </li>
          <li>
            Experienced with hosting/server management including WP Engine, Rackspace,
            and configuring CDNs such as Cloudflare for caching, security, and performance.
          </li>
        </ul>

        {/* Divider */}
        <div className="my-6 border-b border-gray-300"></div>

        {/* SEO & Analytics Skills */}
        <h4 className="text-lg font-semibold mb-2 text-black">SEO & Analytics Skills</h4>
        <ul className="list-disc list-outside pl-6 space-y-3 text-black">
          <li>
            Improved Google PageSpeed Insights scores for both mobile and desktop through
            performance optimization, asset restructuring, and code refactoring.
          </li>
          <li>
            Skilled in diagnosing speed bottlenecks using Lighthouse, GTmetrix, Core Web Vitals,
            and server-level profiling tools.
          </li>
          <li>
            Performed deep SEO audits using Ahrefs and SEMrush, analyzing keyword gaps,
            backlink profiles, site structure, content opportunities, and technical issues.
          </li>
          <li>
            Engineered advanced analytics setups: custom GTM containers, GA4 events,
            KPI dashboards, and detailed data layer implementations.
          </li>
          <li>
            Developed automated webhook pipelines integrating websites with CRMs 
            for accurate lead tracking and reporting.
          </li>
          <li>
            Performed technical SEO audits, UX research, and data analysis to improve 
            rankings, conversions, and user experience.
          </li>
          <li>
            Created custom performance and behavioral KPIs for stakeholders, enabling 
            deeper insights into user journeys and marketing effectiveness.
          </li>
        </ul>

      </div>
    ),
  },
];
export const education: TimelineItem[] = [
  {
    date: '2010 - 2014',
    location: 'University of North Carolina at Charlotte',
    title: 'Bachelor of Information Technology – Software Information Systems',
    content: (
      <p>
        Completed a comprehensive program focused on software development, web technologies,
        databases, networks, and information systems. Gained strong foundational skills in
        programming, problem-solving, and building reliable, user-centered applications.
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
    description: 'Feel free to reach out to me for collaborations, questions, or just to connect. I look forward to hearing from you!',
  items: [
    {
      type: ContactType.Email,
      text: 'jmnzpko@gmail.com',
      href: 'mailto:jmnzpko@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'West Jordan, UT, USA',
      href: 'https://maps.app.goo.gl/JuZeVQQ8He252oHC8',
    },
    {
      type: ContactType.Github,
      text: 'jmnzpko',
      href: 'https://github.com/jmnzpko',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jmnzpko'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
];
