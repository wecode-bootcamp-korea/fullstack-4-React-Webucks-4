import "./List.scss"
import { useNavigate, Route } from "react-router-dom";
import DetailComp from "../Detail/DetailComp"
import { useEffect, useState } from "react";

function ColdBrewCard ({coffee}) {
    //디테일 페이지에 가져올 데이터 지정
    // const params = useParams();
    const [coffeeDetail, setCoffeeDetail] = useState('')
    useEffect(() => {
        fetch(`/data/${coffeeDetail.id}.json`)
        .then((res) => res.json())
        .then((data) => {
            setCoffeeDetail(data)
        })
    },[]);

    const navigate = useNavigate();
    function toDetail() {
        navigate(`/Detail-ChaeWon/${coffee.id}`);
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