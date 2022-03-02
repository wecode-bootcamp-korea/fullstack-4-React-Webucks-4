import "./Detail.scss";
import TopNavChaeWon from "../List/TopNav";

function DetailChaeWon() {
    return (
        <div>
            <TopNavChaeWon />
            <header className="menuAndLocation">
                <p className="drink">패션 탱고 티 레모네이드 피지오</p>
                <p className="location"> 홈&gt;MENU&gt;음료&gt;피지오&gt;패션 탱고 티 레모네이드 피지오</p>
            </header>
            <div className="detailBody">
                <img className="coffeeImg" />
                <section className="detailedDescriptions">
                    <header className="coffeeName">

                    </header>
                </section>
            </div>
        </div>

            
    )
}

export default DetailChaeWon;