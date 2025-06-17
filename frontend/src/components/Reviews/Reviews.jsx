import ReviewForm from "./ReviewForm";
import ReviewsItem from "./ReviewItem";
import PropTypes from "prop-types"
import "./Reviews.css"

function Reviews({ active }) {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewsItem />
          
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm />
      </div>
    </div>
  );
}

export default Reviews;


Reviews.propTypes = {
  active : PropTypes.string
}
//baş harfi küçük olursa camelcase büyük olursa pascalcase