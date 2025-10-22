import type { ReactNode } from 'react';

interface DocSectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  level?: 1 | 2 | 3;
}

export default function DocSection({ id, title, children, level = 2 }: DocSectionProps) {
  const headingClasses = {
    1: 'text-3xl font-bold text-gray-900 mb-4',
    2: 'text-2xl font-bold text-gray-900 mb-3',
    3: 'text-xl font-semibold text-gray-900 mb-2',
  };

  return (
    <section id={id} className="mb-8 scroll-mt-20">
      {level === 1 && <h1 className={headingClasses[1]}>{title}</h1>}
      {level === 2 && <h2 className={headingClasses[2]}>{title}</h2>}
      {level === 3 && <h3 className={headingClasses[3]}>{title}</h3>}
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </section>
  );
}
