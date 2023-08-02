import styles from "../styles/AddReview.module.scss";
import { useState } from "react";
import LoadingScreen from "../../../utils/LoadingScreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import {
  selectCurrentUserName,
  selectCurrentUserId,
  selectCurrentUserImage,
  selectCurrentAccessToken,
} from "../../../redux/features/auth/authSlice";
import { BASE_URL, apiRoutePaths } from "../../../utils/apiRoutePaths";
import PropTypes from "prop-types";
import { useGetAllPropertyReviewsQuery } from "../../../redux/features/reviews/reviewsApiSlice";
import { useDispatch } from "react-redux";
import { apiSlice } from "../../../redux/app/api/apiSlice";

const AddReview = ({ propertyId, onReloadPropertyReviews }) => {
  const dispatch = useDispatch();
  const currentUserName = useSelector(selectCurrentUserName);
  const currentUserId = useSelector(selectCurrentUserId);
  const currentUserImage = useSelector(selectCurrentUserImage);
  const currentAccessToken = useSelector(selectCurrentAccessToken);
  const [fullName, setFullName] = useState(currentUserName);
  const [userReview, setUserReview] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [addReviewLoading, setAddReviewLoading] = useState(false);
  const reviewsReferesh = useGetAllPropertyReviewsQuery({ skip: true });

  
  const formSubmithandler = async (e) => {
    e.preventDefault();

    const url = `${BASE_URL}${apiRoutePaths.addReviews}`;
    const data = {
      first_name: fullName.split(" ")[0],
      last_name: fullName.split(" ")[1],
      property_id: propertyId,
      user_id: currentUserId,
      profile_picture: currentUserImage,
      rating: 5,
      comment: userReview,
    };
    const authToken = currentAccessToken;

    setAddReviewLoading(true);
    console.log(data);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setAddReviewLoading(false);
          window.scrollTo({
            top: -200,
            left: 0,
            behavior: "smooth",
          });
          toast.success(`Added Review Successfully.`, {
            autoClose: 1800,
          });
          dispatch(
            apiSlice.util.updateQueryData("getAllPropertyReviews", propertyId)
          );
          reviewsReferesh.refetch(propertyId);
          onReloadPropertyReviews();
        }
      })
      .catch((error) => {
        console.log(error);
        setAddReviewLoading(false);
        setErrMsg("Error, there was a problem.");
        window.scrollTo({
          top: -200,
          left: 0,
          behavior: "smooth",
        });
        toast.error(`Something went wrong. Adding Review failed.`, {
          autoClose: 3000,
        });
      })
      .finally(() => {
        setAddReviewLoading(false);
      });
  };

  return (
    <>
      <section className={styles.AddReview}>
      { !currentAccessToken ? 
        <h2>Your Review is important. Kindly login to comment</h2> 
      :
        <form
          className={styles.schedule_tour_form}
          onSubmit={formSubmithandler}
        >
          <h4>Drop a Review</h4>
          <p>Please fill in the details in other to review</p>
          <h6 className={styles.errorText} id="errorText">
            {errMsg}
          </h6>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name*"
            className={styles.input_details}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Message"
            className={styles.message_input}
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
          />
          <button>Post Comment</button>
        </form>
}
      </section>
      {addReviewLoading ? (
        <>
          <LoadingScreen loading={addReviewLoading} />
        </>
      ) : (
        <></>
      )}
      <ToastContainer />
    </>
  );
};

export default AddReview;

AddReview.propTypes = {
  propertyId: PropTypes.number,
  onReloadPropertyReviews: PropTypes.func,
};
