import React, { useEffect, useState } from 'react'
import Card from './Card'
import TopNav from '../Components/TopNav/TopNav'
import Footer from '../Components/Footer/Footer'
import styles from './List.module.scss'

function List() {
    // MockData에서부터 두 종류로 분리를 해서 배열 형태로 되어 있기 때문에 
    // 초기값도 이렇게 설정하면 Card 컴포넌트를 mount할때 coffeeList state가 비어있는지 확인하지 않아도 됩니다. (brewedCoffee가 예시)
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
            <TopNav />
            <main className={styles.main}>
                <p className={styles.article__title}>
                    콜드 브루 커피 <img className={styles.article__title__icon} src="https://freepikpsd.com/file/2020/08/coffee-emoji-png-1.png" alt="커피 아이콘" />
                    <span className={styles.article__smalltitle}>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
                </p>
                <article className={styles.article}>
                    {coffeeList["coldBrewCoffee"].map(coffee => {
                        return (
                            <Card
                                key={coffee.id}
                                id={coffee.id}
                                name={coffee.name}
                                imgUrl={coffee.imgUrl}
                            />
                        )})
                    }
                </article>
                <p className={styles.article__title}>
                    브루드 커피 <img className={styles.article__title__icon} src="https://freepikpsd.com/file/2020/08/coffee-emoji-png-1.png" alt="커피 아이콘" />
                    <span className={styles.article__smalltitle}>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
                </p>
                <article className={styles.article}>
                    {coffeeList === false ? null : coffeeList["brewedCoffee"].map(coffee => {
                        return (
                            <Card
                                key={coffee.id}
                                id={coffee.id}
                                name={coffee.name}
                                imgUrl={coffee.imgUrl}
                            />
                        )})
                    }
                </article>
            </main>
            <Footer />
        </div>
    )
}

export default List