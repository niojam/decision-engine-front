import { type ElementType, type ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
}

function Container({ children, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className="mx-auto w-full min-w-[20rem] max-w-[70rem] px-2 md:px-20">
      {children}
    </Tag>
  );
}

export { Container };
