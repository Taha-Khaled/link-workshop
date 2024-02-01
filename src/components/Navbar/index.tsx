import { FunctionComponent } from "react";
import DownArrow from "../../icons/DownArrow";
import styles from "./Navbar.module.scss";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav className={`container ${styles.container}`}>
      <div className={styles.logoHolder}>
        <img src="./Images/Logo.png" alt="Logo" />
      </div>
      <ul className={styles.list}>
        <li>Home</li>
        <li>About us</li>
        <li>News</li>
        <li>Contact us</li>
      </ul>
      <ul className={styles.list}>
        <li>Login</li>
        <li>
          <button className={styles.signUpBtn}>Sign up</button>
        </li>
        <li>
          <button className={styles.langBtn}>
            <span>EN</span>
            <DownArrow width={9} height={4.5} />
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
