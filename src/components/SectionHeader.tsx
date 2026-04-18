import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export default function SectionHeader({ eyebrow, title, children, className }: Props) {
  return (
    <div className={className}>
      <span className="eyebrow mb-4 block">{eyebrow}</span>
      <h2 className="section-title mb-8">{title}</h2>
      {children}
    </div>
  );
}
