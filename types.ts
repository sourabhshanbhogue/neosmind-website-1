import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ClientSegment {
  title: string;
  description: string;
}

export interface BenefitItem {
  text: string;
}

export interface CaseStudyStat {
  label: string;
  value: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}