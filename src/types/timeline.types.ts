export interface TimelineProps {
  id: number;
  icon: React.ReactElement | null;
  title: string;
  subtitle: string;
  time: string;
  showDocument?: string;
  href: string;
  list: string[];
}
