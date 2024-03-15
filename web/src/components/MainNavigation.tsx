import { Link } from "react-router-dom";
import styles from '../styles/MainNavigation.modules.css';


const MainNavigation: React.FC<{}> = () => {
    return (
        <header >
            <nav className={styles.cos}>
                <ul>
                    <li><Link to="/users">Użytkownicy</Link></li>
                    <li><Link to="/user">Użytkownik</Link></li>
                    <li><Link to="/user">Galeria</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;