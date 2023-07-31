import styles from "../styles/PropertyReviews.module.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SingleReview = ({ propertyReview }) => {
  return (
    <>
      <div className={styles.SingleReview}>
        <div className={styles.review_owner}>
          <img
            src={propertyReview.profile_picture}
            alt="profile image"
            className={styles.image_dummy}
          />
          <p>
            {propertyReview.last_name} <span>{propertyReview.first_name}</span>
          </p>
        </div>
        <p>{propertyReview.comment}</p>
      </div>
    </>
  );
};

const PropertyReviews = ({
  propertyReviews,
  reviewIsLoading,
  reviewIsError,
  reviewIsSuccess,
  reload,
}) => {
  useEffect(() => {
    // Logic to handle the reload effect (e.g., fetching data)
    if (reload) {
      console.log("PropertyImages is reloading... by Tega");
      // Additional logic to handle the reload, e.g., fetching new data
    }
  }, [reload]);

  let content;
  if (reviewIsLoading) {
    content = (
      <>
        <h3>Loading Reviews of property</h3>
      </>
    );
  } else if (reviewIsSuccess) {
    content = (
      <>
        {propertyReviews?.length === 0 ? (
          <>
            <p>
              No reivews have been made. Wanna be the first?{" "}
              <Link to={"/login"} className={styles.link_button}>
                Login
              </Link>{" "}
              or{" "}
              <Link to={"/signup"} className={styles.link_button}>
                Signup
              </Link>
            </p>
          </>
        ) : (
          <></>
        )}
        {propertyReviews?.map((reviewData) => {
          return (
            <>
              <SingleReview
                key={`${reviewData.property_name}`}
                propertyReview={reviewData?.attributes}
              />
            </>
          );
        })}
      </>
    );
  } else if (reviewIsError) {
    content = (
      <>
        <h3>Can not fetch reviews of Property right now.</h3>
      </>
    );
  }

  return (
    <>
      <section className={styles.PropertyReviews}>
        <h2>See what people have said about this property</h2>

        <div className={styles.PropertyReviews_list_container}>{content}</div>
      </section>
    </>
  );
};

export default PropertyReviews;

SingleReview.propTypes = {
  propertyReview: PropTypes.any.isRequired,
};

PropertyReviews.propTypes = {
  propertyReviews: PropTypes.arrayOf(PropTypes.any).isRequired,
  reviewIsError: PropTypes.boolean,
  reviewIsSuccess: PropTypes.boolean,
  reviewIsLoading: PropTypes.boolean,
  reload: PropTypes.boolean,
};
