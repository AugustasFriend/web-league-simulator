import { FC } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { routesStrings } from "../routes/AppRoutes";

interface NavButtonProps {
  linkTo: routesStrings;
  label: string;
}

export const NavButton: FC<NavButtonProps> = ({ linkTo }) => {
  return (
    <Link to={linkTo}>
      <button type={"button"} className={styles.button} />
    </Link>
  );
};
