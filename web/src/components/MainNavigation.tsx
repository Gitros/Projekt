import { Link } from "react-router-dom";
import styles from '../styles/MainNavigation.module.css';

const MainNavigation: React.FC<{}> = () => {
    return (
        <header className={styles.navHeader}>
            <nav className={styles.list}>
                <ul className={styles.listItems}>
                    <li><Link className={styles.link} to="/">Strona główna</Link></li>
                    <li><Link className={styles.link} to="/users">Użytkownicy</Link></li>
                    <li><Link className={styles.link} to="/gallery">Galeria</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
