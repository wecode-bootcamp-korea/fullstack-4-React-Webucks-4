import React from "react";
import styles from'./Review.module.scss'
import cx from "classnames";
const Review = (props) => {
  return (<div className={cx(styles.topMargin,styles.reviewString)}>  {props.review}</div>
  );
};

export default Review;
