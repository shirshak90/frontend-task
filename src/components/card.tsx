import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardPropsWithIcon extends CardProps {
  icon?: JSX.Element;
}

const Card = ({ children, className }: CardProps) => (
  <div className={clsx("card", className)}>{children}</div>
);

const CardHeader = ({ children, className }: CardProps) => (
  <div className={clsx("card-header", className)}>{children}</div>
);

const CardTitle = ({ children, icon, className }: CardPropsWithIcon) => (
  <div className={clsx("card-title", className)}>
    {children}
    <div>{icon}</div>
  </div>
);

const CardContent = ({ children, className }: CardProps) => (
  <div className={clsx(className)}>{children}</div>
);

const CardDescription = ({ children, className }: CardProps) => (
  <div className={clsx("card-description", className)}>{children}</div>
);

export { Card, CardHeader, CardTitle, CardContent, CardDescription };
