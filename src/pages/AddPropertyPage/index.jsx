import styles from "./AddPropertyPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import placeHolderImage from "./images/upload.png";
import img2 from "./images/uploaded.png";
import img3 from "./images/uploaded.png";
import img4 from "./images/deleteBtn.png";
import { useState } from "react";

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
  // const [formValidationError, setFormValidationError] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyZipCode, setPropertyZipCode] = useState("+234");
  const [propertyShortDetails, setPropertyShortDetails] = useState("");
  const [fullDetails, setFullDetails] = useState("");
  const [bedroomNumber, setBedroomNumber] = useState("");
  const [bathroomNumber, setBathroomNumber] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [floorPlanDescription, setFloorPlanDescription] = useState("");

  // images variables
  const [setFloorPlanImage] = useState("");
  const [floorPlanImagePreview, setFloorPlanImagePreview] = useState(null);
  // const [floorPlanImageUrl, setFloorPlanImageUrl] = useState("");

  const handleFloorPlanImageChange = (e) => {
    setFloorPlanImage(e.target.files[0]);
    setFloorPlanImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  // const uploadImageToCloudinaryAndGetImageURL = async () => {
  //   try {
  //     let imageURL;
  //     if (
  //       profileImage &&
  //       (profileImage.type === "image/png" ||
  //         profileImage.type === "image/jpg" ||
  //         profileImage.type === "image/jpeg")
  //     ) {
  //       const image = new FormData();
  //       image.append("file", profileImage);
  //       image.append("cloud_name", cloud_name);
  //       image.append("upload_preset", upload_preset);

  //       const response = await fetch(
  //         `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
  //         {
  //           method: "POST",
  //           body: image,
  //         }
  //       );

  //       const imgData = await response.json();
  //       imageURL = imgData.url.toString();
  //       setImagePreview(null);
  //       return imageURL;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return "";
  //   }
  // };

  const handleFormSubmit = async (e) => {
    e.prevemtDefault();
  };

  return (
    <>
      <AnimatedFadeInPage>
        <section className={styles.container}>
          <h1>Property Details</h1>
          <form onSubmit={handleFormSubmit}>
            <div className={styles.grid}>
              <div>
                <label htmlFor="propertyName">Property Name</label>
                <input
                  type="text"
                  placeholder="Your Property Name"
                  required
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="Your Property Address"
                  required
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  placeholder="Price of Property"
                  required
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                />
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  required
                  value={propertyZipCode}
                  onChange={(e) => setPropertyZipCode(e.target.value)}
                />
              </div>
            </div>

            <label htmlFor="textarea">Short Details</label>
            <textarea
              placeholder="Short Details Of Your Property"
              required
              value={propertyShortDetails}
              onChange={(e) => setPropertyShortDetails(e.target.value)}
            />
            <label htmlFor="textarea">Full Details</label>
            <textarea
              placeholder="Full Details Of Your Property"
              required
              className={styles.fullText}
              value={fullDetails}
              onChange={(e) => setFullDetails(e.target.value)}
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
                      value={bedroomNumber}
                      onChange={(e) => setBedroomNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="bathroom">Bathroom:</label>
                    <input
                      type="text"
                      className={styles.bedroomInput}
                      required
                      value={bathroomNumber}
                      onChange={(e) => setBathroomNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="propertySize">Property Size:</label>
                    <input
                      type="text"
                      className={styles.propertySize}
                      required
                      value={propertySize}
                      onChange={(e) => setPropertySize(e.target.value)}
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
                      value={floorPlanDescription}
                      onChange={(e) => setFloorPlanDescription(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className={styles.uploadBtnWrapper}>
                      <img
                        src={
                          floorPlanImagePreview
                            ? floorPlanImagePreview
                            : placeHolderImage
                        }
                        alt=""
                        className={styles.uploadImg}
                      />
                      <input
                        type="file"
                        name="floorplan"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFloorPlanImageChange}
                      />
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
                        <img
                          src={placeHolderImage}
                          alt=""
                          className={styles.uploadImg}
                        />
                        <input type="file" name="myfile" />
                      </div>
                    </div>
                    {uploadedImages.map((uploadedImage) => {
                      return (
                        <div
                          className={styles.propertyUpload}
                          key={uploadedImage.image}
                        >
                          <img
                            src={uploadedImage.image}
                            alt="/"
                            className={styles.uploadedImg}
                          />
                          <img
                            src={img4}
                            alt="/"
                            className={styles.deleteBtn}
                          />
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
