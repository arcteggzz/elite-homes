import { useState } from "react";
import styles from "../styles/PropertySchedule.module.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectCurrentUserName } from "../../../redux/features/auth/authSlice";
import { usePropertyBookingMutation } from "../../../redux/features/users/usersApiSlice";
import LoadingScreen from "../../../utils/LoadingScreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const PropertySchedule = ({
  ownerEmail,
  propertyAddress,
  ownerPhoneNumber,
  ownerName,
  ownerId,
  ownerImage,
  propertyId,
}) => {
  const currentUserName = useSelector(selectCurrentUserName);
  const [fullName, setFullName] = useState(currentUserName);
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [propertyBooking] = usePropertyBookingMutation();
  const [errMsg, setErrMsg] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);

  const navigate = useNavigate();

  const validateFieldIsNotEmpty = (name) => {
    return name.length < 1;
  };

  const formSubmithandler = async (e) => {
    e.preventDefault();

    if (validateFieldIsNotEmpty(fullName)) {
      setErrMsg("Full name Field Cannot be empty.");
    } else if (validateFieldIsNotEmpty(userEmail)) {
      setErrMsg("Please enter your email.");
    } else if (validateFieldIsNotEmpty(userPhoneNumber)) {
      setErrMsg("Please enter your phone number.");
    } else if (validateFieldIsNotEmpty(userMessage)) {
      setErrMsg("Please enter your message.");
    } else {
      setBookingLoading(true);

      try {
        const bookingObject = {
          name: fullName.trim(),
          email: userEmail.trim(),
          message: userMessage,
          phone_number: userPhoneNumber,
          property_id: propertyId,
        };
        const response = await propertyBooking({ bookingObject });
        if (response.data) {
          toast.success(`Booking Successful.`, {
            autoClose: 1800,
          });
          setBookingLoading(false);
          setTimeout(() => {
            navigate("/properties/property-listings");
          }, 2000);
        }
      } catch (error) {
        setBookingLoading(false);
        setErrMsg(error.data.message);
        toast.error(`Something went wrong. Booking failed.`, {
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <>
      <section className={styles.PropertySchedule}>
        <div className={styles.owner_details}>
          <div className={styles.card_top}>
            <img src={ownerImage} alt="" />
            <div className={styles.owner_name_tag}>
              <p>Elite Homes</p>
              <h6>{ownerName}</h6>
              <p>{propertyAddress} </p>
            </div>
          </div>
          <div className={styles.other_details}>
            <div className={styles.contact_detail}>
              <p>mobile phone:</p>
              <h5>{ownerPhoneNumber}</h5>
            </div>
            <div className={styles.contact_detail}>
              <p>ID number:</p>
              <h5>{ownerId}</h5>
            </div>
            <div className={styles.contact_detail}>
              <p>email:</p>
              <h5>{ownerEmail}</h5>
            </div>
          </div>
          <button>view my properties</button>
        </div>

        <form
          className={styles.schedule_tour_form}
          onSubmit={formSubmithandler}
        >
          <h4>Schedule Tour</h4>
          <p>
            Please fill in the detail in other to book the meeting for the
            apartment.
          </p>
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
            placeholder="Your Email*"
            className={styles.input_details}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Phone*"
            className={styles.input_details}
            value={userPhoneNumber}
            onChange={(e) => setUserPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Message"
            className={styles.message_input}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button>Make Enquiry</button>
        </form>
      </section>
      {bookingLoading ? (
        <>
          <LoadingScreen loading={bookingLoading} />
        </>
      ) : (
        <></>
      )}
      <ToastContainer />
    </>
  );
};

export default PropertySchedule;

PropertySchedule.propTypes = {
  ownerImage: PropTypes.string,
  ownerName: PropTypes.string,
  propertyAddress: PropTypes.string,
  ownerPhoneNumber: PropTypes.string,
  ownerId: PropTypes.string,
  ownerEmail: PropTypes.string,
  propertyId: PropTypes.string,
};
