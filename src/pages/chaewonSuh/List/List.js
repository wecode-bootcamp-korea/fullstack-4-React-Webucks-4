import "./List.scss"
import TopNavChaeWon from "./TopNav";
import { useEffect, useState } from "react";
import CoffeeCardComp from "./CoffeeCardComp";
import { Link, useNavigate } from "react-router-dom";

function ListChaeWon () {

    const [coffeeList, setcoffeeList] = useState({
        coldBrewCoffee: [],
        brewedCoffee: []
    });
    

    useEffect(() => {
        fetch('/data/coffeeList.json')
        .then((res) => res.json())
        .then((data) => {
            setcoffeeList(data)
        })
    },[]);

    return (
        <div className="listBody">
        <TopNavChaeWon />
        <header className="coffeeHeader">
            <div className = "categories">
                <p className = "espCategory" >에스프레소 음료</p> 
                <i class="fa-solid fa-mug-hot"></i>
                <h6 className = "description">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h6>
            </div>
        </header>

        <ul className="coldBrewList">
            { coffeeList.coldBrewCoffee.map(coffee => (
                    <CoffeeCardComp 
                        key={coffee.id}
                        coffee={coffee}
                    />
                )
            )
            }
        </ul>

        <header className ="coffeeHeader">
            <div className = "categories">
                <p className = "espCategory">브루드 커피</p>
                <i class="fa-solid fa-mug-hot"></i>
                <h6 className = "description">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h6>
            </div>
        </header>
        <ul className="coldBrewList">
        { coffeeList.brewedCoffee.map(coffee => (
                    <CoffeeCardComp 
                        key={coffee.id}
                        coffee={coffee}
                    />
                )
            )
            }
        </ul>
        </div>
    )
}

export default ListChaeWon;