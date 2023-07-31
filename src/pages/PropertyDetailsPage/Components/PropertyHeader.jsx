import styles from "../styles/PropertyHeader.module.scss";
import PropTypes from "prop-types";
import { BASE_URL, apiRoutePaths } from "../../../utils/apiRoutePaths";
import { useSelector } from "react-redux";
import { selectCurrentAccessToken } from "../../../redux/features/auth/authSlice";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LoadingScreen from "../../../utils/LoadingScreen";

const PropertyHeader = ({
  propertyName,
  propertyPrice,
  propertyCategory,
  propertyId,
}) => {
  const currentAccessToken = useSelector(selectCurrentAccessToken);
  const [addFavoriteLoading, setAddFavoriteLoading] = useState(false);

  const getPropertyCategory = () => {
    let category = "";
    propertyCategory === 1 ? (category = "For Rent") : (category = "For Sale");
    return category;
  };

  const addFavoriteHandler = () => {
    const url = `${BASE_URL}${apiRoutePaths.makeFavorite(propertyId)}`;
    console.log(url);

    const authToken = currentAccessToken;

    setAddFavoriteLoading(true);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setAddFavoriteLoading(false);
          window.scrollTo({
            top: -200,
            left: 0,
            behavior: "smooth",
          });
          toast.success(`Added Favorite Successfully.`, {
            autoClose: 1800,
          });
          // should we reload the page to display new review here?
        }
      })
      .catch((error) => {
        console.log(error);
        setAddFavoriteLoading(false);
        window.scrollTo({
          top: -200,
          left: 0,
          behavior: "smooth",
        });
        toast.error(`Something went wrong. Adding Favorite failed.`, {
          autoClose: 3000,
        });
      })
      .finally(() => {
        setAddFavoriteLoading(false);
      });
  };

  return (
    <>
      <section className={styles.PropertyHeader}>
        <div className={styles.Property_Name_Price}>
          <h2>{propertyName}</h2>
          <h2>{`Price: #${propertyPrice}`}</h2>
        </div>
        <div className={styles.Property_Tags}>
          <p className={styles.Tag_Name}>{getPropertyCategory()}</p>
          <p>Apartment</p>
          <p>{`Property ID: QMBIY78-903-UUID${propertyId}`}</p>
          <button
            className={styles.like_button}
            onClick={() => addFavoriteHandler()}
          >
            Add Favorite
          </button>
        </div>
      </section>
      {addFavoriteLoading ? (
        <>
          <LoadingScreen loading={addFavoriteLoading} />
        </>
      ) : (
        <></>
      )}
      <ToastContainer />
    </>
  );
};

export default PropertyHeader;

PropertyHeader.propTypes = {
  propertyName: PropTypes.string,
  propertyPrice: PropTypes.string,
  propertyCategory: PropTypes.number,
  propertyId: PropTypes.string.isRequired,
};
