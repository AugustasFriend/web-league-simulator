import { FC } from "react";
import { NavButton } from "./NavButton";

export const Navbar: FC = () => {
  return (
    <div>
      <NavButton linkTo={"/"} label={"Overview"} />
      <NavButton linkTo={"/schedule"} label={"Schedule"} />
      <NavButton linkTo={"/standings"} label={"Standings"} />
    </div>
  );
};
