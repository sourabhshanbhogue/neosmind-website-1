import { 
  FileSearch, 
  Settings2, 
  Users, 
  Layers, 
  BarChart3, 
  Zap 
} from 'lucide-react';
import { ServiceItem, ClientSegment, BenefitItem } from './types';

export const HERO_CONTENT = {
  h1: "AI Clarity for Modern Businesses.",
  subheadline: "We audit your workflows, implement high-impact AI systems, and train your team. Eliminate the noise and focus on what drives revenue.",
  ctaPrimary: "Get in Touch",
  ctaSecondary: "See How We Work"
};

export const PROBLEM_CONTENT = {
  title: "AI is everywhere — and confusing.",
  description: "Most businesses are paralyzed by the sheer volume of new tools and hype. You're likely facing:",
  points: [
    {
      icon: Layers,
      title: "Too Many Tools",
      text: "Drowning in subscriptions that don't talk to each other."
    },
    {
      icon: Zap,
      title: "No Strategy",
      text: "Ad-hoc usage without a unified operational roadmap."
    },
    {
      icon: BarChart3,
      title: "No Measurable ROI",
      text: "Spending time and money with zero clarity on returns."
    }
  ],
  closing: "You don't need more tools. You need clarity."
};

export const SERVICES_CONTENT: ServiceItem[] = [
  {
    title: "AI Audit",
    description: "A deep dive into your current processes. We identify bottlenecks and deliver a clear, step-by-step roadmap for AI adoption.",
    icon: FileSearch
  },
  {
    title: "Implementation",
    description: "We build the systems for you. Custom automations, intelligent agents, and seamless integrations that just work.",
    icon: Settings2
  },
  {
    title: "Training & Support",
    description: "Technology is useless if no one uses it. We provide hands-on workshops, custom SOPs, and ongoing optimization support.",
    icon: Users
  }
];

export const WHO_WE_HELP_CONTENT: ClientSegment[] = [
  {
    title: "Small Businesses",
    description: "Streamline operations to do more with a lean team."
  },
  {
    title: "Mid-Sized Companies",
    description: "Scale efficiency and automate complex departmental workflows."
  },
  {
    title: "Creators & Solopreneurs",
    description: "Reclaim your time by offloading repetitive tasks to agents."
  }
];

export const WHY_NEOSMIND_CONTENT: BenefitItem[] = [
  { text: "Business-first approach, not tech-first" },
  { text: "Structured, non-invasive audit process" },
  { text: "Measurable ROI from day one" },
  { text: "End-to-end delivery (Strategy → Build → Training)" },
  { text: "Practical solutions, absolutely no hype" }
];

export const CASE_STUDY_CONTENT = {
  title: "Micro Case Study: Boutique Legal Firm",
  before: "Paralegals spending 15+ hours/week on document intake and classification.",
  after: "Implemented a custom document processing pipeline with human-in-the-loop review.",
  result: "85% reduction in manual data entry time. Staff refocused on client strategy."
};

export const CTA_CONTENT = {
  headline: "Ready to operationalize AI?",
  subheadline: "Stop guessing. Start building a future-proof business today.",
  button: "Get in Touch"
};