import "./List.scss"
import { useNavigate } from "react-router-dom";

function TopNavChaeWon () {
    const navigate = useNavigate();
    function toList() {
        navigate("/List-ChaeWon");
    }
    return (
        <header className="links">
            <h1 className="listLogo">WeBucks</h1>
            <nav className="menus">
                <p className="topRightMenu" onClick={toList}>COFFEE</p>
                <p className="topRightMenu" onClick={toList}>MENU</p>
                <p className="topRightMenu" onClick={toList}>STORE</p>
                <p className="topRightMenu" onClick={toList}>WHAT'S NEW</p>
            </nav>
        </header>
    )
}

export default TopNavChaeWon;