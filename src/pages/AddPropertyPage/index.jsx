import styles from "./AddPropertyPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import img from "./images/upload.png";
import img2 from "./images/uploaded.png";
import img3 from "./images/uploaded.png";
import img4 from "./images/deleteBtn.png";

const uploadedImages = [
  {
    image: img2,
    title: "first upload",
  },
  {
    image: img3,
    title: "second upload",
  },
  {
    image: img2,
    title: "first upload",
  },
  {
    image: img3,
    title: "second upload",
  },
];

const AddPropertyPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <section className={styles.container}>
          <h1>Property Details</h1>
          <form>
            <div className={styles.grid}>
              <div>
                <label htmlFor="propertyName">Property Name</label>
                <input type="text" placeholder="Your Property Name" required />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="Your Property Address"
                  required
                />
              </div>

              <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" placeholder="$0.00" required />
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" placeholder="Zip Code" required />
              </div>
            </div>

            <label htmlFor="textarea">Short Details</label>
            <textarea placeholder="Short Details Of Your Property" required />
            <label htmlFor="textarea">Full Details</label>
            <textarea
              placeholder="Full Details Of Your Property"
              required
              className={styles.fullText}
            />

            {/* Additional Info */}
            <h2>Addition Info</h2>
            <div className={styles.addInfo}>
              <div>
                <p className={styles.category}>Property Category</p>
                <div className={styles.checks}>
                  <p>For Rent</p>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.checks}>
                  <p>For Sale</p>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.checks}>
                  <p>For Lease</p>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>

                <p className={styles.types}>Property Types</p>
                <div className={styles.checks}>
                  <p>Apartment</p>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.checks}>
                  <p>Bungalow</p>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.checks}>
                  <p>Residential Area</p>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.checks}>
                  <p>Mansion</p>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.checks}>
                  <p>Island</p>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <button className={styles.btn}>Add Property</button>
              </div>

              <div className={styles.verticalRule}></div>

              <div className={styles.flexRightContainer}>
                <div className={styles.flexRightContent}>
                  <div>
                    <label htmlFor="bedroom">Bedroom:</label>
                    <input
                      type="text"
                      className={styles.bedroomInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="bathroom">Bathroom:</label>
                    <input
                      type="text"
                      className={styles.bedroomInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="propertySize">Property Size:</label>
                    <input
                      type="text"
                      className={styles.propertySize}
                      required
                    />
                  </div>
                </div>

                <div className={styles.floorPlanFlex}>
                  <div>
                    <label htmlFor="textarea">Floor Plan</label>
                    <textarea
                      placeholder="Describe Your Floor Plan"
                      className={styles.floorPlan}
                      required
                    />
                  </div>

                  <div>
                    <div className={styles.uploadBtnWrapper}>
                      <img src={img} alt="" className={styles.uploadImg} />
                      <input type="file" name="myfile" />
                    </div>
                  </div>
                </div>

                <div className={styles.upload}>
                  <h3>Image</h3>
                  <p>
                    Upload images of your property to help users understand what
                    you are offering and build trust. Upoload <span>5</span>{" "}
                    Images
                  </p>

                  <div className={styles.uploadImage}>
                    <div>
                      <div className={styles.uploadBtnWrapper}>
                        <img src={img} alt="" className={styles.uploadImg} />
                        <input type="file" name="myfile" />
                      </div>
                    </div>
                    {uploadedImages.map((uploadedImage) => {
                      return (
                        <div className={styles.propertyUpload}>
                          <img
                            src={uploadedImage.image}
                            alt="/"
                            className={styles.uploadedImg}
                          />
                          <img src={img4} alt="/" className={styles.deleteBtn} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </AnimatedFadeInPage>
    </>
  );
};

export default AddPropertyPage;
