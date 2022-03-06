import "./List.scss"
import { useNavigate } from "react-router-dom";

function TopNavChaeWon () {
    const navigate = useNavigate();
    function toDetail() {
        navigate("/Detail");
    }
    return (
        <header className="links">
            <h1 className="listLogo">WeBucks</h1>
            <nav className="menus">
                <p className="topRightMenu" onClick={toDetail}>COFFEE</p>
                <p className="topRightMenu" onClick={toDetail}>MENU</p>
                <p className="topRightMenu" onClick={toDetail}>STORE</p>
                <p className="topRightMenu" onClick={toDetail}>WHAT'S NEW</p>
            </nav>
        </header>
    )
}

export default TopNavChaeWon;