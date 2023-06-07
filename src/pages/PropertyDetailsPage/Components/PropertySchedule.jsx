import styles from "../styles/PropertySchedule.module.scss";
import dummyAvatar from "../images/dummyAvatar.png";

const PropertySchedule = () => {
  return (
    <>
      <section className={styles.PropertySchedule}>
        <div className={styles.owner_details}>
          <div className={styles.card_top}>
            <img src={dummyAvatar} alt="" />
            <div className={styles.owner_name_tag}>
              <p>Elite Homes</p>
              <h6>Steve parker</h6>
              <p>456, soluyi estherport avenue, gbagada, Lagos, Nigeria. </p>
            </div>
          </div>
          <div className={styles.other_details}>
            <div className={styles.contact_detail}>
              <p>mobile phone:</p>
              <h5>+234454345543</h5>
            </div>
            <div className={styles.contact_detail}>
              <p>ID number:</p>
              <h5>456733t74822762</h5>
            </div>
            <div className={styles.contact_detail}>
              <p>email:</p>
              <h5>steveparker@example.com</h5>
            </div>
          </div>
          <button>view my properties</button>
        </div>

        <form className={styles.schedule_tour_form}>
          <h4>Schedule Tour</h4>
          <p>
            Please fill in the detail in other to book the meeting for the
            apartment.
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name*"
            className={styles.input_details}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Email*"
            className={styles.input_details}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Phone*"
            className={styles.input_details}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Message"
            className={styles.message_input}
          />
          <button>Make Enquiry</button>
        </form>
      </section>
    </>
  );
};

export default PropertySchedule;
