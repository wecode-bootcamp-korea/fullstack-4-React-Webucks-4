import React , { useState, useEffect } from "react";
import TopNav from "../components/TopNav/TopNav";
import styles from'./Detail.module.scss'
import cx from "classnames";
import Review from "../components/Review/Review";
import { useLocation } from "react-router";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Detail = () => {
  const location = useLocation();
  
  const id = location.state.id;

  const [coffeeDetailData, setCoffeeDetailData] = useState({})
  const [categoryTitleString, setCategoryTitleString] = useState("")
  const [hierarchyString,setHierarchyString]=useState("")
  const [nutritionDataObject, setnutritionDataObject] = useState({
    calorie:"",
    natrium:"",
    fat:"",
    sugars:"",
    protein:"",
    caffeine:""
  })
  const [reviewListState, setReviewListState] = useState([])
  const [reviewKey, setReviewKey] = useState(0)






  useEffect(() => {
    if(id!=undefined){
    fetch(`/data/coffeeDetail/${id}.json`, {
      method: 'GET' // GET method는 기본값이라서 생략이 가능합니다. 
    })              // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setCoffeeDetailData(data);
        setCategoryTitle(data.type)
        setNutritionData(data.nutrition)
        setHierarchy(data);
      });
    }

    

  },[])


  const [heartColor, setHeartColor] = useState("black");

  function changeHeartColor(){
if(heartColor=="black"){setHeartColor("red")}
else if(heartColor=="red"){setHeartColor("black")}
  }


 function setCategoryTitle(category){

if(category=="Cold Brew Coffee"){

  setCategoryTitleString("콜드 브루")
  console.log(categoryTitleString)
}else if(category=="Brewed Coffee"){
  setCategoryTitleString("브루드 커피")
}
 }

 function setNutritionData(data){
  let objectForNutritionData={}
data.map((item)=>{objectForNutritionData[item.name]=item.value})
setnutritionDataObject(objectForNutritionData)
 }



 function setHierarchy(data){
   let category=data.type
if(category=="Cold Brew Coffee"){
  setHierarchyString(`커피/콜드 브루/${data.name}`)

}else if(category=="Brewed Coffee"){
  setHierarchyString(`커피/브루드 커피/${data.name}`)

}

 }



 function addReview(e){
 
  if (e.key === "Enter"&& e.target.value!="") {
    let currenReviewList = reviewListState
   currenReviewList.push({reviewString:e.target.value,key:reviewKey})
    setReviewListState(currenReviewList)
    setReviewKey(reviewKey+1)
  }
 }





  return (
  <div className={styles["master-container"]}>
  <TopNav />
  <h1 className={styles.categoryTitle}>{categoryTitleString}</h1>
  <h2 className={cx(styles.hierarchyText,styles.bottomMargin)}>{hierarchyString}</h2>
  <div className={styles.contentsWrapper}>
    <div  className={styles.coffeeImageWrapper}> 
      <img className={styles.coffeeImage} src={coffeeDetailData.imgUrl}
      
      />
      </div>
 
  <div className={styles.coffeeDataWrapper} >
    
    <div className={cx(styles.flexSpaceBetween,styles.bottomMargin)}>
      <div className={styles.coffeeTitleWrapper}>
      <div className={styles.coffeeTitle} >
      {coffeeDetailData.name}
      </div>
      <div className={styles.coffeeTitleEn}>
      {coffeeDetailData.englishName}
      </div>
      </div>
      <FontAwesomeIcon icon={faHeart} onClick={changeHeartColor} color={heartColor} style={{cursor:"pointer"}} />
    </div>

    <div className={cx(styles.blackColorBar,styles.bottomMargin)} />
      <div className={cx(styles.bottomMargin,styles.description)}>
      {coffeeDetailData.description}
      </div>
      <div className={cx(styles.blackColorBar,styles.translucent)} />
      <div className={cx(styles.nutritionTitleWrapper,styles.flexSpaceBetween)}>
      <div >
      제품 영양 정보
      </div>
      <div>
      {coffeeDetailData.size}
      </div>
    </div>
    
    <div className={cx(styles.blackColorBar,styles.bottomMargin,styles.translucent)} />
    <div className={cx(styles.flexSpaceBetween,styles.bottomMargin,styles.nutritionWrapper)}>
        <div className={cx(styles.flexSpaceBetween,styles.nutritionDataRow)} >
          <div className={cx(styles.flexSpaceBetween,styles.nutritionDataWrapper)}><div>1회 제공량 (kcal)</div><div>{nutritionDataObject.calorie}</div></div>
          <div className={cx(styles.flexSpaceBetween,styles.nutritionDataWrapper)}><div>포화지방 (g)</div><div>{nutritionDataObject.fat}</div></div>
          <div className={cx(styles.flexSpaceBetween,styles.nutritionDataWrapper)}><div>단백질 (g)</div><div>{nutritionDataObject.protein}</div></div>
        </div>
        <div className={cx(styles.blackVerticalBar,styles.translucent)}/>
        <div className={cx(styles.flexSpaceBetween,styles.nutritionDataRow)} >
          <div className={cx(styles.flexSpaceBetween,styles.nutritionDataWrapper)}><div>나트륨 (mg)</div><div>{nutritionDataObject.natrium}</div></div>
          <div className={cx(styles.flexSpaceBetween,styles.nutritionDataWrapper)}><div>당류 (g)</div><div>{nutritionDataObject.sugars}</div></div>
          <div className={cx(styles.flexSpaceBetween,styles.nutritionDataWrapper)}><div>카페인 (mg)</div><div>{nutritionDataObject.caffeine}</div></div>
        </div>
      </div>
      <div className={cx(styles.allergyInfoBox,styles.bottomMargin)}>알레르기 유발요인 : {coffeeDetailData.allergyInfo}</div>


      <div>

<div className={cx(styles.reviewWrapper,styles.topMargin)}>
    <div className={cx(styles.reviewTitle,styles.bottomMargin)} >
    리뷰
      </div>    
      <div className={cx(styles.blackColorBar,styles.bottomMargin,styles.translucent)} />
    
      <div className={styles.reviewList}>
      {reviewListState.map((review)=>{ return <Review review= {review.reviewString} key= {review.key} />})}
      </div>

      <input className={cx(styles.reviewTextField)} placeholder="리뷰를 입력해주세요." onKeyPress={addReview}></input>
</div>

</div>





    </div>




   </div>



  </div>
  )
  
  
  ;
};

export default Detail;
