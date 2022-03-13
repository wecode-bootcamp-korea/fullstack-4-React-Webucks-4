import "./Detail"

function ReviewComp({reviewList}) {
        
        
    return (
            <div className='userId'>coffee_lover
                <article className="userComment">: {reviewList.reviewContent}</article>
                {/* <i class="fa-solid fa-trash-can" value={reviewInput}/> */}
            </div>
            )
    }

    export default ReviewComp