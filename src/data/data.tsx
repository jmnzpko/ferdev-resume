import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  CodeBracketIcon,
  MapIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/areas-we-serve.png';
import porfolioImage9 from '../images/portfolio/General Ad.png';
import porfolioImage10 from '../images/portfolio/ilwu.png';
import porfolioImage11 from '../images/portfolio/veterans.png';
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
  title: 'Fernando Jimenez — Web Developer & Technical SEO Strategist',
  description:
    'Web developer and technical SEO strategist with 10+ years building high-performance WordPress sites, front-end applications, and technical SEO systems for legal and healthcare markets.',
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
        <strong className="text-stone-100">Web developer</strong> and{' '}
        <strong className="text-stone-100">technical SEO strategist</strong> with 10+ years of experience building
        high-performance WordPress sites, modern front-end applications, and organic growth systems for legal and
        healthcare markets.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I combine deep development skills with hands-on SEO implementation, analytics engineering, and{' '}
        <strong className="text-stone-100">AI-assisted workflows</strong> — building sites that are fast, maintainable,
        and built to rank.
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
  description: `Web developer and technical SEO strategist with 10+ years of experience building high-performance WordPress sites, architecting technical SEO systems, and driving organic growth for competitive legal and healthcare markets. I combine deep front-end development skills with hands-on SEO implementation, analytics engineering, and AI-assisted workflows to build faster, rank better, and deliver measurable business outcomes. Currently applying AI tools including Claude, ChatGPT, and Gemini as a core part of my daily development and strategy work.`,
  aboutItems: [
    {
      label: 'Primary Expertise',
      text: 'WordPress development, front-end engineering, technical SEO (10+ years)',
      Icon: CodeBracketIcon,
    },
    {
      label: 'Front-End Stack',
      text: 'React, Next.js, Vue.js, React Native, JavaScript, SCSS, Tailwind CSS',
      Icon: SparklesIcon,
    },
    {
      label: 'WordPress & PHP',
      text: 'Custom themes, ACF Pro, TailPress, MVC architecture, headless/REST API',
      Icon: WrenchScrewdriverIcon,
    },
    {
      label: 'Technical SEO',
      text: 'Core Web Vitals, schema/structured data, local SEO, law firm SEO, E-E-A-T',
      Icon: MapIcon,
    },
    {
      label: 'Analytics Engineering',
      text: 'GA4, GTM, data layers, conversion tracking, KPI dashboards, CallRail',
      Icon: CalendarIcon,
    },
    {
      label: 'AI Workflows',
      text: 'Claude, ChatGPT, Gemini — daily use for coding, debugging, SEO strategy, and prototyping',
      Icon: SparklesIcon,
    },
    {
      label: 'Deployment & DevOps',
      text: 'Git, GitHub, Vercel, WP Engine, Cloudflare',
      Icon: BuildingOffice2Icon,
    },
    {
      label: 'Markets Served',
      text: 'Personal injury law firms, multi-location healthcare, e-commerce',
      Icon: AcademicCapIcon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Development',
    skills: [
      {name: 'WordPress & PHP', level: 10},
      {name: 'React / Next.js', level: 9},
      {name: 'Vue.js', level: 9},
      {name: 'React Native / Expo', level: 8},
      {name: 'JavaScript / TypeScript', level: 10},
      {name: 'SCSS / Tailwind CSS', level: 10},
      {name: 'ACF Pro / TailPress', level: 10},
      {name: 'Git / GitHub / Vercel / WP Engine', level: 10},
    ],
  },
  {
    name: 'Technical SEO',
    skills: [
      {name: 'Technical SEO Audits', level: 10},
      {name: 'Core Web Vitals', level: 10},
      {name: 'Local & Multi-Location SEO', level: 10},
      {name: 'Schema / Structured Data', level: 10},
      {name: 'Law Firm SEO & E-E-A-T', level: 10},
      {name: 'Crawlability & Redirect Strategy', level: 10},
    ],
  },
  {
    name: 'Analytics',
    skills: [
      {name: 'GA4', level: 10},
      {name: 'Google Tag Manager', level: 10},
      {name: 'Data Layers & Event Tracking', level: 10},
      {name: 'Conversion Tracking & KPI Dashboards', level: 10},
      {name: 'Google Search Console', level: 10},
      {name: 'CallRail / AgencyAnalytics', level: 8},
    ],
  },
  {
    name: 'SEO Tools',
    skills: [
      {name: 'SEMrush', level: 10},
      {name: 'Ahrefs', level: 10},
      {name: 'Screaming Frog', level: 9},
      {name: 'Majestic SEO', level: 8},
      {name: 'PageSpeed Insights / GTmetrix', level: 10},
      {name: 'Lighthouse', level: 10},
    ],
  },
  {
    name: 'AI Workflow',
    skills: [
      {name: 'Claude', level: 10},
      {name: 'ChatGPT', level: 10},
      {name: 'Gemini', level: 9},
      {name: 'AI-Assisted Coding & Debugging', level: 10},
      {name: 'Rapid Prototyping with AI', level: 10},
      {name: 'AI-Driven SEO Strategy', level: 9},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Pacific Mind Health — WordPress Rebuild',
    description:
      'Full front-end rebuild of a healthcare WordPress site. Migrating from a heavy Elementor setup to a clean custom architecture using TailPress, ACF Pro, and flexible content modules — with full SEO preservation throughout.',
    url: 'https://pacificmindhealth.com',
    image: porfolioImage9,
    tags: ['WordPress', 'ACF Pro', 'TailPress', 'PHP', 'WP Engine', 'SEO Preservation'],
  },
  {
    title: 'WEBRIS — Law Firm SEO Strategy',
    description:
      'SEO Strategist for personal injury law firms through WEBRIS. Technical audits, multi-location strategy, E-E-A-T content, LegalService schema, and local SEO for competitive markets in Phoenix, Albuquerque, and Minnesota.',
    url: 'https://runioninjurylaw.com/areas-we-serve/',
    image: porfolioImage8,
    tags: ['Technical SEO', 'Local SEO', 'Law Firm SEO', 'LegalService Schema', 'E-E-A-T'],
  },
  {
    title: 'The Advocates — Multi-Site WordPress Platform',
    description:
      'Built and maintained a custom WordPress platform across 20+ personal injury law firm websites over 9 years. Custom PHP themes, MVC architecture, Vue.js and React integrations, webhook/CRM pipelines, and advanced GA4/GTM analytics.',
    url: 'https://www.theadvocates.com',
    image: porfolioImage1,
    tags: ['WordPress', 'PHP', 'Vue.js', 'React', 'Webhooks', 'GA4', 'GTM'],
  },
  {
    title: 'The Advocates — Utah Website',
    description:
      'Same core template as the national site but with many custom components and dynamic features. Each page type uses unique code, allowing experimentation with new technologies and improving performance and flexibility.',
    url: 'https://www.utahadvocates.com',
    image: porfolioImage2,
  },
  {
    title: 'Custom WordPress Backend',
    description:
      'A look at the custom backend built for a content team. Clean, organized ACF fields and a simple UI that made it easy for non-technical writers to update pages without needing a developer.',
    url: '/assets/images/portfolio-3.png',
    image: porfolioImage3,
  },
  {
    title: 'Express Records',
    description:
      'Custom WordPress website for a medical records and billing company. Developed the layout, handled all integrations, and optimized for speed and user experience.',
    url: 'https://www.expressrr.com',
    image: porfolioImage4,
  },
  {
    title: 'The Advocates — Location Page',
    description:
      'Content-heavy location page designed for strong SEO performance. Built to handle large amounts of text and media while staying fully responsive and easy for the content team to update.',
    url: 'https://www.theadvocates.com/wyoming/gillette-personal-injury-lawyer/',
    image: porfolioImage5,
  },
  {
    title: 'Vue.js Attorney Directory',
    description:
      'Hybrid Vue.js and WordPress page that pulls attorney data through the WP JSON API. Faster, more dynamic user experience by running Vue inside a WordPress environment.',
    url: 'https://www.theadvocates.com/attorneys/',
    image: porfolioImage6,
  },
  {
    title: 'Mivi — AI Image Generator',
    description:
      'React project built to explore AI image generation APIs and prompt engineering. A small passion project experimenting with modern AI models and creative tooling.',
    url: 'https://ai-mivi-aoo-8lxz.vercel.app/',
    image: porfolioImage7,
  },
  {
    title: 'Pacific Mind Health — ILWU Landing Page',
    description:
      'Targeted landing page for ILWU union members, highlighting how Pacific Mind Health services are fully covered through union benefits. Addresses unique mental health challenges longshoremen face and drives in-person bookings.',
    url: 'https://pacificmindhealth.com/ilwu-mental-health/',
    image: porfolioImage10,
  },
  {
    title: 'Pacific Mind Health — Veterans & Military',
    description:
      'Dedicated landing page for Veterans and Military Service Members, positioning Pacific Mind Health as a VA Community Care Network provider. Covers PTSD/Trauma treatment, TriWest and TRICARE authorization, and veteran-specific care.',
    url: 'https://pacificmindhealth.com/veterans/',
    image: porfolioImage11,
  },
  {
    title: 'Educational Learning App — React Native / Expo',
    description:
      'Mobile app prototype to help children practice spelling and reading through interactive word exercises, progress-based feedback, and gamified learning. Built with AI-assisted workflows for rapid prototyping and iteration.',
    url: '#',
    tags: ['React Native', 'Expo', 'AI-Assisted Development', 'Mobile', 'Education'],
  },
  {
    title: 'AI-Integrated SEO Tooling',
    description:
      'Custom AI-assisted workflows integrating Claude, ChatGPT, and Gemini into technical SEO auditing, content strategy, structured data QA, and client reporting. Combines AI output with manual validation for improved quality and delivery speed.',
    url: '#',
    tags: ['Claude', 'ChatGPT', 'Gemini', 'AI Workflow', 'SEO Automation', 'Technical SEO'],
  },
];

/**
 * Resume section
 */
export const experience: TimelineItem[] = [
  {
    date: 'January 2026 – Present',
    location: 'FJ Digital Solutions LLC',
    title: 'Web Developer / SEO Strategist / AI Workflow Consultant',
    content: (
      <div className="text-black max-w-none">
        <p className="mb-4 text-sm text-gray-600">Independent contractor serving legal and healthcare clients.</p>

        <h4 className="text-base font-semibold mb-2 text-black">WEBRIS (SEO Agency) — SEO Strategist</h4>
        <ul className="list-disc list-outside pl-6 space-y-2 text-black mb-4">
          <li>
            SEO Strategist for personal injury law firm clients: Runion Injury Law (Phoenix/Albuquerque) and Milavetz
            Law P.A. (Minnesota).
          </li>
          <li>
            Technical SEO audits, Google Search Console analysis, keyword tracking, competitor research, and backlink
            gap analysis.
          </li>
          <li>
            Multi-location SEO strategy across personal injury, car accident, truck accident, and motorcycle accident
            practice areas.
          </li>
          <li>Improved keyword positions overall across competitive personal injury markets.</li>
          <li>
            E-E-A-T content strategy, LegalService schema implementation, GBP optimization, and local authority
            building.
          </li>
          <li>
            Google review acquisition workflows: office-specific QR codes, review hub UX, and 301 redirect tracking
            links.
          </li>
          <li>
            Tools: SEMrush, Ahrefs, Screaming Frog, Majestic SEO, GSC, GA4, AgencyAnalytics, CallRail, ClickUp,
            Claude, ChatGPT, Gemini.
          </li>
        </ul>

        <div className="my-4 border-b border-gray-200"></div>

        <h4 className="text-base font-semibold mb-2 text-black">Pacific Mind Health — Front-End WordPress Developer</h4>
        <ul className="list-disc list-outside pl-6 space-y-2 text-black">
          <li>
            Rebuilding a healthcare WordPress site from a heavy Elementor setup to a clean custom architecture using
            TailPress, ACF Pro, custom post types, flexible content modules, and Gutenberg-compatible components.
          </li>
          <li>
            Full SEO preservation throughout the migration: URL structure, H1/H2 hierarchy, metadata, internal links,
            and form placements.
          </li>
          <li>Deployment via GitHub and WP Engine. Stakeholder communication via Loom walkthroughs.</li>
        </ul>
      </div>
    ),
  },
  {
    date: '2016 – 2025',
    location: 'The Advocates — Personal Injury Law Firm',
    title: 'Web Developer & SEO Specialist',
    content: (
      <div className="text-black max-w-none">
        <h4 className="text-base font-semibold mb-2 text-black">Development</h4>
        <ul className="list-disc list-outside pl-6 space-y-2 text-black mb-4">
          <li>
            Built and maintained custom WordPress platform across 20+ law firm websites using PHP, MVC architecture, and
            modern tooling (Node.js, NPM, Yarn, Gulp).
          </li>
          <li>
            Integrated Vue.js and React into WordPress environments, including a Vue-based internal attorney directory
            application.
          </li>
          <li>
            Developed webhook/JSON CRM integrations for lead attribution and built advanced GA4 setups with custom GTM
            containers and data layer implementations.
          </li>
          <li>
            Core Web Vitals and PageSpeed optimization using Lighthouse and GTmetrix. Hosting across WP Engine,
            Rackspace, and Cloudflare CDN.
          </li>
        </ul>

        <div className="my-4 border-b border-gray-200"></div>

        <h4 className="text-base font-semibold mb-2 text-black">SEO & Analytics</h4>
        <ul className="list-disc list-outside pl-6 space-y-2 text-black">
          <li>Technical SEO audits using Ahrefs and SEMrush: keyword gaps, backlink profiles, site structure analysis.</li>
          <li>Engineered advanced analytics: custom GTM containers, GA4 events, KPI dashboards, data layer implementations.</li>
          <li>Automated webhook pipelines integrating websites with CRMs for accurate lead tracking and attribution.</li>
        </ul>
      </div>
    ),
  },
  {
    date: '2014 – 2016',
    location: 'Premier Equestrian',
    title: 'Web Developer & SEO Specialist',
    content: (
      <ul className="list-disc list-outside pl-6 space-y-2 text-black">
        <li>
          Drove a 40% increase in horse-jump product sales through SEO and content improvements.
        </li>
        <li>Moved horsejumps.net from page 4 to page 1 on Google for core product keywords.</li>
      </ul>
    ),
  },
  {
    date: '2012 – 2013',
    location: 'AC&M Group',
    title: 'IT Specialist & Web Developer',
    content: (
      <ul className="list-disc list-outside pl-6 space-y-2 text-black">
        <li>Website development, server migration to Rackspace cloud, and IT infrastructure management.</li>
      </ul>
    ),
  },
];

export const education: TimelineItem[] = [
  {
    date: '2010 – 2014',
    location: 'University of North Carolina at Charlotte',
    title: 'Bachelor of Information Technology — Software Information Systems',
    content: (
      <p>
        Comprehensive program focused on software development, web technologies, databases, networks, and information
        systems. Strong foundational skills in programming, problem-solving, and building user-centered applications.
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
  description:
    'Available for web development, WordPress builds, technical SEO projects, and AI workflow consulting. Reach out and I will get back to you promptly.',
  items: [
    {
      type: ContactType.Email,
      text: 'jmnzpko@gmail.com',
      href: 'mailto:jmnzpko@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '801-425-0487',
      href: 'tel:+18014250487',
    },
    {
      type: ContactType.Location,
      text: 'West Jordan, UT, USA',
      href: 'https://maps.app.goo.gl/JuZeVQQ8He252oHC8',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/fernando-jimenez-76895b47',
      href: 'https://www.linkedin.com/in/fernando-jimenez-76895b47/',
    },
    {
      type: ContactType.Github,
      text: 'github.com/jmnzpko',
      href: 'https://github.com/jmnzpko',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jmnzpko'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/fernando-jimenez-76895b47/'},
];
