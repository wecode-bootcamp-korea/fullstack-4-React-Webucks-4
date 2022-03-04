import { useNavigate } from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate()

    function goToDetail() {
        navigate("/Detail-yeonjoo")
    }

    return (
        <div>
            <section className='article__frame'> 
                <div className="img__frame" onClick={goToDetail}>
                    <img className='img__content' src={props.imgUrl} alt={props.name} /> 
                </div>
            {props.name}</section>
        </div>
    )
}

export default Card