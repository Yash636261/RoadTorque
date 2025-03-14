import { cx } from "../utils/all";

interface ContainerProps {
  children: React.ReactNode;
  large?: boolean;
  alt?: boolean;
  className?: string;
}

export default function Container(props: ContainerProps) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-5 lg:py-8",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
