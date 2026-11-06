import { FC, MouseEventHandler, ReactNode } from "react";

export interface ITextLink {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

const TextLink: FC<ITextLink> = ({
  href,
  children,
  target,
  rel,
  onClick,
  className = "",
}) => (
  <a
    href={href}
    target={target}
    rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
    onClick={onClick}
    className={`text-primary-default underline underline-offset-2 hover:opacity-80 transition-opacity duration-150 ${className}`}
  >
    {children}
  </a>
);

export default TextLink;
