import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { Button } from "./button";

interface DashboardHeaderProps {
  title: string;
  backButton?: boolean;
}

export function DashboardHeader({ title, backButton }: DashboardHeaderProps) {
  return (
    <div className="dashboard-header">
      {backButton && (
        <Link to={"/"}>
          <Button variant={"outline"}>
            <IoMdArrowBack className="icon" />
          </Button>
        </Link>
      )}
      <h1>{title}</h1>
    </div>
  );
}
