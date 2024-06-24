export interface NavItem {
  title: string;
  href: string;
  icon: React.FC;
  color?: string;
  isChidren?: boolean;
  children?: NavItem[];
}
