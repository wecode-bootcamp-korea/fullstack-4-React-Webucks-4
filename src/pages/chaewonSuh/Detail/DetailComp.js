import { useState } from "react";
import "./Detail.scss";
import ReviewComp from './ReviewComp'

let globalId = 1;

function CoffeeDetailPage ({coffee}) {

    const [reviewList, setReviewList] = useState([]);
    const [heart, setHeart] = useState('fa-regular fa-heart')
    const postReview = e => {

        if (e.key === 'Enter') {
            setReviewList([...reviewList,
                {reviewId: globalId++, reviewContent: e.target.value}])
                e.target.value = '';
        };
    }
    
    
    function changeLike() {
        heart === 'fa-regular fa-heart' ? setHeart('fa-solid fa-heart') : setHeart('fa-regular fa-heart')
    };

    return (
        <div>
        <header className="categoryAndLocation">
                <h1 className="drinkCategory">{coffee.type}</h1>
                <p className="location"> 홈 &gt; MENU &gt; 음료 &gt; {coffee.name}</p>
        </header>

            <div className="detailBody">
                <div className="imageWrapper">
                    <img className="coffeeImgChae" src={coffee.imgUrl}/>
                </div>
                <section className="detailedDescriptions">
                    <header className="coffeeNameAndLike">
                        <div className = "names">
                            <h3 className = "drinkName"> {coffee.name}</h3>
                            <h6 className="drinkEngName"> {coffee.englishName}</h6>
                        </div>
                        <i className={heart} onClick={changeLike}></i>
                    </header>
                    <article className="drinkDescription">
                    {coffee.description}
                    </article>
                    <div className="nutritionAndSize">
                        <h4 className="nutritionLetter">제품 영양 정보</h4>
                        <h4 className="sizeOfDrink">  {coffee.size}</h4>
                    </div>
                    <div className="nutritions">
                        <article className="leftNutrition">
                            <div className="leftLetters">
                                {coffee.nutrition[0].name}<br/>
                                {coffee.nutrition[1].name}<br/>
                                {coffee.nutrition[2].name}
                            </div>
                            <div className="rightLetters">
                                {coffee.nutrition[0].value}<br/>
                                {coffee.nutrition[1].value}<br/>
                                {coffee.nutrition[2].value}
                            </div>
                        </article>
                        <article className="rightNutrition">
                            <div className="leftLetters">
                                {coffee.nutrition[3].name}<br/>
                                {coffee.nutrition[4].name}<br/>
                                {coffee.nutrition[5].name}
                            </div>
                            <div className="rightLetters">
                                {coffee.nutrition[3].value}<br/>
                                {coffee.nutrition[4].value}<br/>
                                {coffee.nutrition[5].value}
                            </div>
                        </article>
                    </div>
                    <header className="allergies">{coffee.allergyInfo}</header>
                    <header className="review">리뷰</header>
                    <div className="userReview">
                    {reviewList.map(reviewList => (
                            <ReviewComp 
                            key ={reviewList.reviewId}
                            reviewList = {reviewList}
                            />
                            )
                        )
                    }
                    <input className="newReview" placeholder="리뷰를 입력해주세요." onKeyPress={ postReview }></input>
                    </div>
                </section>
            </div>
        </div>
    )


}


export default CoffeeDetailPage;