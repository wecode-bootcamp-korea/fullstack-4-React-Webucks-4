import React, { useEffect, useState } from 'react'
import Card from './Card'
// import TopNav from '../../components/TopNav/TopNav'
// import Footer from '../../components/Footer/Footer'
import './List.scss'

function List() {
    const [ coffeeList, setCoffeeList ] = useState({
        coldBrewCoffee: [],
        brewedCoffee: [],
      })

    useEffect(() => {
      fetch('http://localhost:3000/data/coffeeList.json', {
          method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          setCoffeeList(data)
        })
    }, [])

    return (
        <div>
            {/* <TopNav /> */}
            <main>
                <p className="article__title">
                    콜드 브루 커피 <img className="article__title__icon" src="https://freepikpsd.com/file/2020/08/coffee-emoji-png-1.png" alt="커피 아이콘" />
                    <span className="article__smalltitle">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
                </p>
                <article className='article'>
                    {coffeeList["coldBrewCoffee"].map(coffee => {
                        return (
                            <Card
                                key={coffee.id}
                                name={coffee.name}
                                imgUrl={coffee.imgUrl}
                            />
                        )})
                    }
                </article>
                <p className="article__title">
                    브루드 커피 <img className="article__title__icon" src="https://freepikpsd.com/file/2020/08/coffee-emoji-png-1.png" alt="커피 아이콘" />
                    <span className="article__smalltitle">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
                </p>
                <article className='article'>
                    {coffeeList == false ? null : coffeeList["brewedCoffee"].map(coffee => {
                        return (
                            <Card
                                key={coffee.id}
                                name={coffee.name}
                                imgUrl={coffee.imgUrl}
                            />
                        )})
                    }
                </article>
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default List