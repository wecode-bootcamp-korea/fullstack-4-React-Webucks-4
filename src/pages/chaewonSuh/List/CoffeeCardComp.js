import "./List.scss"
import { useNavigate } from "react-router-dom";

function ColdBrewCard ({coffee}) {
    const navigate = useNavigate();
    function toDetail() {
        navigate("/Detail-ChaeWon");
    }

    return (
                <li className="coffeeCategory">
                    <dl className = "coffeeCell">
                        <dt className = "coffeeImg" >
                            <button className="detailLink" onClick={toDetail}>
                                <img className ="imageItself" src={coffee.imgUrl} alt={coffee.name}/>
                            </button>
                        </dt>
                        <dd className="coffeeName">{coffee.name}</dd>
                    </dl>
                </li>
    )
}

export default ColdBrewCard;