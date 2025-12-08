export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface AIModeProps {
  name: string;
  description: string;
  color: 'pink' | 'yellow' | 'orange' | 'purple' | 'blue';
  icon: React.ReactNode;
}

export interface TestimonialProps {
  content: string;
  author: string;
  timeAgo: string;
  likes?: number;
  comments?: number;
}

export interface PricingPlanProps {
  name: string;
  features: string[];
  highlighted?: boolean;
  color?: 'default' | 'primary';
}

export interface TownhallFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}
