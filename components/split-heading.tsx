import type { ElementType } from "react";

type SplitHeadingProps = {
  as?: ElementType;
  children: string;
  className?: string;
  intro?: boolean;
  id?: string;
};

export function SplitHeading({
  as: Tag = "h2",
  children,
  className = "",
  intro = false,
  id,
}: SplitHeadingProps) {
  return (
    <Tag
      className={className}
      id={id}
      aria-label={children}
      data-split-heading=""
      data-intro={intro ? "" : undefined}
    >
      {children.split(" ").map((word, index) => (
        <span className="split-word" aria-hidden="true" key={`${word}-${index}`}>
          <span>{word}</span>
          {index < children.split(" ").length - 1 ? "\u00a0" : null}
        </span>
      ))}
    </Tag>
  );
}
