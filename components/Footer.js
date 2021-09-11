import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events 2021</p>
      <p>
        {router.pathname !== "/about" ? (
          <Link href='/about'>About This project</Link>
        ) : (
          <Link href='/'>Home</Link>
        )}
      </p>
    </footer>
  );
}

export default Footer;
