import "./List.scss"
import { useNavigate } from "react-router-dom";
import TopNavChaeWon from "./TopNav";
function ListChaeWon () {
    const navigate = useNavigate();
    function toDetail() {
        navigate("/Detail");
    }
    return (
        <div className="listBody">
        <TopNavChaeWon />
        <header className="coffeeHeader">
            <div className = "categories">
                <p className = "espCategory" >에스프레소 음료</p> 
                <i className = "fa-solid fa-mug-hot"></i>
                <h6 className = "description">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h6>
            </div>
        </header>
        <ul className="espList">
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick={toDetail}>
                            <img className ="cortadoImg" src="../../pages/Images/cortado.jpg" alt="Cortado Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">코르타도</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="espMacchiatoImg" src="../../pages/Images/espresso-macchiato.jpg" alt="Espresso Macchiato Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">에스프레소 마끼아또</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="americanoImg" src="../../pages/Images/black-coffee.jpg" alt="Americano image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">아메리카노</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className ="cortadoImg" src="../../pages/Images/cortado.jpg" alt="Cortado Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">코르타도</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="espMacchiatoImg" src="../../pages/Images/espresso-macchiato.jpg" alt="Espresso Macchiato Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">에스프레소 마끼아또</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="americanoImg" src="../../pages/Images/black-coffee.jpg" alt="Americano image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">아메리카노</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className ="cortadoImg" src="../../pages/Images/cortado.jpg"  alt="Cortado Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">코르타도</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="espMacchiatoImg" src="../../pages/Images/espresso-macchiato.jpg" alt="Espresso Macchiato Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">에스프레소 마끼아또</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="americanoImg" src="../../pages/Images/black-coffee.jpg" alt="Americano image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">아메리카노</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className ="cortadoImg" src="../../pages/Images/cortado.jpg" alt="Cortado Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">코르타도</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="espMacchiatoImg" src="../../pages/Images/espresso-macchiato.jpg" alt="Espresso Macchiato Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">에스프레소 마끼아또</dd>
                </dl>
            </li>
            <li className="coffeeLists">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="americanoImg" src="../../pages/Images/black-coffee.jpg" alt="Americano image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">아메리카노</dd>
                </dl>
            </li> 
        </ul>
        <header className ="coffeeHeader">
            <div className = "categories">
                <p className = "espCategory">브루드 커피</p>
                <i className ="fa-solid fa-mug-hot"></i>
                <h6 className = "description">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h6>
            </div>
        </header>
        <ul className="brewedList">
            <li className="brewedCategory">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className ="cortadoImg" src="../../pages/Images/cortado.jpg" alt="Cortado Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">코르타도</dd>
                </dl>
            </li>
            <li className="brewedCategory">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="espMacchiatoImg" src="../../pages/Images/espresso-macchiato.jpg" alt="Espresso Macchiato Image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">에스프레소 마끼아또</dd>
                </dl>
            </li>
            <li className="brewedCategory">
                <dl className = "coffeeCell">
                    <dt className = "coffeeImg" >
                        <button className="detailLink" onClick = {toDetail}>
                            <img className="americanoImg" src="../../pages/Images/black-coffee.jpg" alt="Americano image"/>
                        </button>
                    </dt>
                    <dd className="coffeeName">아메리카노</dd>
                </dl>
            </li>
        </ul>
        </div>
    )
}

export default ListChaeWon;