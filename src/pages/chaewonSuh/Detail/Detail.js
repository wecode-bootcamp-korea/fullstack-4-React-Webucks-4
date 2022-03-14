import "./Detail.scss";
import TopNavChaeWon from "../List/TopNav";
import { useState, useEffect } from "react";
import DetailComp from "./DetailComp"
import { useParams, useNavigate } from "react-router-dom"

function DetailChaeWon() {

    const params = useParams();

    const [coffeeDetail, setCoffeeDetail] = useState({
        id: 0,
        type: "",
        name: "",
        imgUrl: "/loading.jpg",
        englishName: "",
        description: "신선하게 브루드(Brewed)되어 원두의 다양함이 살아있는 커피",
        size: "",
        nutrition: [{}, {}, {}, {}, {}, {}],
        allergyInfo: "없음",
      });

      useEffect(() => {
        fetch(`/data/coffeeDetail/${params.id}.JSON`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setCoffeeDetail(data);
          });
      });

      
    const [heart, setHeart] = useState('fa-regular fa-heart')
    function changeLike() {
        heart == 'fa-regular fa-heart' ? setHeart('fa-solid fa-heart') : setHeart('fa-regular fa-heart')
    };

    return (
        
        <div className="wholePage">
            <TopNavChaeWon />
            <DetailComp 
                key={coffeeDetail.id}
                coffee={coffeeDetail}
            />            

           
            <footer className="footers">
                <div className="companyInfo">
                    company<br/>
                    한눈에 보기<br/>
                    스타벅스 사명<br/>
                    스타벅스 소개<br/>
                    국내 뉴스룸<br/>
                    세계의 스타벅스<br/>
                    글로벌 뉴스룸
                </div>
            </footer>
        </div>
    )
}

export default DetailChaeWon;