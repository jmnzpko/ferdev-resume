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
      href: '/assets/resume.pdf',
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
  description: `
    I’m a web developer with 10+ years of experience at The Advocates, where I specialized in building and 
    maintaining custom WordPress solutions. Even though WordPress can be viewed as a traditional platform, 
    I consistently pushed it forward—modernizing our workflow, implementing an MVC-style architecture, 
    and working with tools like Sage to create cleaner, scalable structures.

    My core expertise is WordPress (custom themes, plugins, ACF, performance, and UX-focused builds), 
    but I’ve also been hands-on with modern front-end technologies. I’ve built front-end features using 
    Vue.js and React, both for internal tools and experimental projects, because I believe in keeping my 
    development approach current and aligned with modern standards.

    The page you're viewing right now is built with React, and I continue to deepen my skills in 
    component-driven development, modern JavaScript, and AI-assisted workflows using tools like VS Code 
    + integrated AI to speed up iteration and prototyping.

    I enjoy blending the stability of WordPress with the flexibility of modern frameworks, and I’m always 
    exploring new technologies to improve how I build digital experiences.
  `,
  aboutItems: [
    {label: 'Primary Experience', text: 'WordPress (9+ years)', Icon: AcademicCapIcon},
    {label: 'Front-End Exposure', text: 'React & Vue.js', Icon: SparklesIcon},
    {label: 'Approach', text: 'Modernization, MVC patterns, Sage Theme', Icon: BuildingOffice2Icon},
    {label: 'Tech Mindset', text: 'Constant learner, modern and AI-assisted development', Icon: CalendarIcon},
    {label: 'Specialization', text: 'Custom Themes, ACF, UX & Performance', Icon: MapIcon},
  ],
};



/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend & Build Tools',
    skills: [
      { name: 'PHP', level: 9 },
      { name: 'Advanced Custom Fields (ACF)', level: 10 },
      { name: 'Node.js / NPM / Yarn', level: 8 },
      { name: 'Gulp', level: 8 },
      { name: 'MVC Architecture', level: 8 },
      { name: 'Git', level: 8 },
    ],
  },
  {
    name: 'SEO & Analytics',
    skills: [
      { name: 'SEO (Technical & On-Page)', level: 9 },
      { name: 'Google Tag Manager (GTM)', level: 9 },
      { name: 'Google Analytics 4 (GA4)', level: 9 },
      { name: 'Ahrefs / SEMrush', level: 8 },
      { name: 'Data Layer / Event Tracking', level: 9 },
      { name: 'Lucky Orange / Heatmaps', level: 8 },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'WordPress (Custom themes & plugins)', level: 10 },
      { name: 'HTML5 / CSS3 / SCSS', level: 10 },
      { name: 'JavaScript (ES6+)', level: 9 },
      { name: 'React.js', level: 7 },
      { name: 'Vue.js', level: 6 },
      { name: 'Bootstrap', level: 9 },
      { name: 'jQuery', level: 9 },
      { name: 'Responsive / UX Design', level: 9 },
    ],
  },
  {
    name: 'Spoken Languages',
    skills: [
      { name: 'English', level: 10 },
      { name: 'Spanish', level: 8 },
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

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
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
export const experience: TimelineItem[] = [
  {
    date: '2016 - 2025',
    location: 'The Advocates (Personal Injury Law Firm)',
    title: 'Web Developer',
    content: (
      <p>
        Built and maintained custom WordPress sites, converting PSD designs into themes and plugins using PHP, HTML, CSS/SCSS, JavaScript, and MVC architecture. 
        Streamlined workflows with build tools (Gulp, Node.js, NPM, Yarn). Integrated analytics (GTM, GA4, Ahrefs, SEMrush) for tracking KPIs, including visits, conversions, and cost per acquisition. 
        Developed event tracking, data layers, and webhooks connecting websites to CRMs for accurate lead transfer. Conducted UX research and implemented improvements. Ensured sites met performance, security, and SEO best practices and produced documentation for staff content management.
      </p>
    ),
  },
  {
    date: '2014 - 2016',
    location: 'Premier Equestrian',
    title: 'Web Developer / SEO Specialist',
    content: (
      <p>
        Optimized horsejumps.net SEO and on-site content, boosting sales by 40% and elevating the site to first-page search rankings. 
        Analyzed web metrics and KPIs to guide marketing strategy, configured analytics tools (Google Analytics, Google Trends, Lucky Orange, Google Ads), and improved website architecture for better UX and search visibility. 
        Managed online marketing campaigns including paid ads, affiliate programs, email promotions, and social media initiatives.
      </p>
    ),
  },
  {
    date: '2012 - 2013',
    location: 'AC&M Group',
    title: 'IT Specialist / Web Developer',
    content: (
      <p>
        Designed and maintained websites using HTML, CSS, JavaScript, and CMS tools. Collaborated with management to prioritize website needs and select technical solutions. 
        Migrated data to Rackspace cloud servers with regular backups. Diagnosed and resolved hardware, software, and network issues while ensuring data security and disaster recovery protocols.
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
