import { Link } from "react-router-dom";

const MainNavigation: React.FC<{}> = () => {
    return (
        <header>
            <nav>
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