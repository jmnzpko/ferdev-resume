import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
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
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
