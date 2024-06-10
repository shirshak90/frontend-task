import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { Button } from "./button";

interface DashboardHeaderProps {
  title: string;
  backButton?: boolean;
}

export function DashboardHeader({ title, backButton }: DashboardHeaderProps) {
  const router = useNavigate();

  return (
    <div className="dashboard-header">
      {backButton && (
        <Button variant={"outline"} onClick={() => router(-1)}>
          <IoMdArrowBack className="icon" />
        </Button>
      )}
      <h1>{title}</h1>
    </div>
  );
}
