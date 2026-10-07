/**
 * Site copy carried over from the previous protxempower.com. Wording is kept
 * as the owner wrote it; only spelling and grammar slips have been fixed.
 */

export type IconName = 'target' | 'handshake' | 'compass' | 'users' | 'shield' | 'scale' | 'chat' | 'lock';

export interface Service {
  slug: string;
  title: string;
  summary: string;
  icon: IconName;
}

export const SERVICES: Service[] = [
  {
    slug: 'conflict-resolution',
    title: 'Customized Conflict Resolution',
    summary:
      'Our approach is personalized to meet the unique needs of each client, promoting effective communication and resolution strategies tailored to your specific situation.',
    icon: 'target',
  },
  {
    slug: 'mediation',
    title: 'Conflict Resolution and Mediation',
    summary:
      'Tailored mediation services for employees that foster understanding and collaboration between the public sector employee and the employer.',
    icon: 'handshake',
  },
  {
    slug: 'ongoing-support',
    title: 'Ongoing Support and Guidance',
    summary:
      'We provide continuous support throughout the conflict resolution process, and referrals to employment law attorneys should the situation require it.',
    icon: 'compass',
  },
  {
    slug: 'group-consultations',
    title: 'Employee Group Consultations',
    summary:
      'In-depth consultations on employment and workplace law so you are well informed and equipped to handle legal challenges, including fact finding to determine whether employment law has been violated.',
    icon: 'users',
  },
];

export interface Testimonial {
  quote: string;
  author: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The consultation I received was thorough and insightful. I felt empowered to navigate my employment issues with confidence, thanks to the guidance from Protect and Empower. They truly care about their clients.',
    author: 'Angelica A.',
  },
  {
    quote:
      'Consulting and strategizing with Protect and Empower was a game-changer for our negotiating team. Their mediation skills helped us achieve more than expected. We can’t thank them enough!',
    author: 'LA County Supervisors BT',
  },
  {
    quote:
      'With an already established positive working relationship with LA County DCFS, Protect and Empower was able to have successful outcomes!',
    author: 'John V.',
  },
  {
    quote:
      'I was impressed by the professionalism and dedication of the Protect and Empower team. They provided clear strategies and support that helped me address my workplace challenges effectively.',
    author: 'Emily R.',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'What services does Protect and Empower offer?',
    answer:
      'We provide conflict resolution and mediation services specifically tailored for public sector employees, as well as consultations on employment and workplace law issues. We also refer out to employment law attorneys who can pursue legal action on the employee’s behalf.',
  },
  {
    question: 'How can I schedule a consultation?',
    answer:
      'You can schedule a consultation by filling out the contact form on this website, or by calling our office directly to speak with a representative.',
  },
  {
    question: 'What should I expect during a mediation session?',
    answer:
      'During a mediation session, you can expect a neutral environment where all parties can express their concerns. Our trained mediators will facilitate the discussion to help reach a mutually agreeable solution.',
  },
  {
    question: 'Is my information kept confidential?',
    answer:
      'Yes. All information shared during consultations and mediation sessions is kept strictly confidential, ensuring your privacy and trust in our services.',
  },
];

/** The steps a new client goes through, drawn from the FAQ and service copy. */
export const PROCESS_STEPS = [
  {
    title: 'Reach out',
    body: 'Call us or send a message through the contact form. Everything you share is kept confidential.',
  },
  {
    title: 'Consultation',
    body: 'We listen, gather the facts, and help you understand where you stand under employment and workplace law.',
  },
  {
    title: 'Resolution',
    body: 'We mediate with your employer in a neutral setting, or refer you to an employment law attorney if legal action is needed.',
  },
] as const;
