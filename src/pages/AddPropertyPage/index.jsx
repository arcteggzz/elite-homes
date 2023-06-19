import styles from "./AddPropertyPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import placeHolderImage from "./images/upload.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../../utils/LoadingScreen";
import { useCreatePropertyMutation } from "../../redux/features/userProperty/userPropertyApiSlice";

const AddPropertyPage = () => {
  const navigate = useNavigate();
  const [propertyCreationLoading, setPropertyCreationLoading] = useState(false);
  const [createProperty] = useCreatePropertyMutation();

  const [formValidationError, setFormValidationError] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyZipCode, setPropertyZipCode] = useState("+000");
  const [propertyShortDetails, setPropertyShortDetails] = useState("");
  const [fullDetails, setFullDetails] = useState("");
  const [bedroomNumber, setBedroomNumber] = useState("");
  const [bathroomNumber, setBathroomNumber] = useState("");
  const [propertyFloorPlanArea, setPropertyFloorPlanArea] = useState("");
  const [floorPlanDescription, setFloorPlanDescription] = useState("");

  //checkbox variables
  const [isForRent, setIsForRent] = useState(true);
  const [isForSale, setIsForSale] = useState(false);

  // floor Plan variables
  const [floorPlanImage, setFloorPlanImage] = useState("");
  const [floorPlanImagePreview, setFloorPlanImagePreview] = useState(null);

  //other images variables
  const [otherImages, setOtherImages] = useState([]);
  const [otherImagesPreview, setOtherImagesPreview] = useState([]);
  // const [links, setLinks] = useState([]);

  //cloudinary variables
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
  const cloud_name = import.meta.env.VITE_CLOUD_NAME;

  const validateFormFieldIsEmpty = (value) => {
    return value.length < 1;
  };

  const categoryIdHandler = () => {
    if (isForRent) {
      setIsForRent(false);
      setIsForSale(true);
    } else {
      setIsForRent(true);
      setIsForSale(false);
    }
  };

  const handleFloorPlanImageChange = (e) => {
    setFloorPlanImage(e.target.files[0]);
    setFloorPlanImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleOtherImagesChange = (e) => {
    setOtherImages(e.target.files);
    const arrayContainer = [];
    for (let key in e.target.files) {
      if (key === "length" || key === "item") {
        console.log("");
      } else {
        const singleImagePreview = URL.createObjectURL(e.target.files[key]);
        arrayContainer.push(singleImagePreview);
      }
    }
    setOtherImagesPreview(arrayContainer);
  };

  const uploadImageToCloudinaryAndGetImageURL = async (imageToUpload) => {
    try {
      let imageURL;
      if (
        imageToUpload &&
        (imageToUpload.type === "image/png" ||
          imageToUpload.type === "image/jpg" ||
          imageToUpload.type === "image/jpeg")
      ) {
        const image = new FormData();
        image.append("file", imageToUpload);
        image.append("cloud_name", cloud_name);
        image.append("upload_preset", upload_preset);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          {
            method: "POST",
            body: image,
          }
        );

        const imgData = await response.json();
        imageURL = imgData.url.toString();
        return imageURL;
      }
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  const uploadMultipleImagesToCloudinaryAndGetURLsInArray = async () => {
    try {
      let arr = [];
      for (let i = 0; i < otherImages.length; i++) {
        const data = await uploadImageToCloudinaryAndGetImageURL(
          otherImages[i]
        );
        arr.push(data);
      }
      return arr;
    } catch (error) {
      return [];
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateFormFieldIsEmpty(propertyName)) {
      setFormValidationError("Please Enter a Property Name.");
      return;
    }
    if (validateFormFieldIsEmpty(propertyAddress)) {
      setFormValidationError("Please Enter a Property Address.");
      return;
    }
    if (validateFormFieldIsEmpty(propertyPrice)) {
      setFormValidationError("Please Enter a Property Price.");
      return;
    }
    if (validateFormFieldIsEmpty(fullDetails)) {
      setFormValidationError("Please Enter the description for the property.");
      return;
    }
    if (!floorPlanImagePreview) {
      setFormValidationError("Please select a Floor Plan Image");
      return;
    }
    if (floorPlanImage.size > 2100000) {
      setFormValidationError(
        "Floor Plan Image File size too big. Plese select a profile image less than 2mb"
      );
      return;
    }

    setPropertyCreationLoading(true);

    const floorPlanCloudinaryUrl = await uploadImageToCloudinaryAndGetImageURL(
      floorPlanImage
    );

    const other_images_array =
      await uploadMultipleImagesToCloudinaryAndGetURLsInArray();

    const propertyObject = {
      property_name: propertyName,
      property_address: propertyAddress,
      property_price: +propertyPrice,
      category_id: isForRent ? 1 : 2,
      property_description: fullDetails,
      property_stock: 1,
      property_total_floor_area: +propertyFloorPlanArea,
      property_bedroom_number: +bedroomNumber,
      property_toilet_number: +bathroomNumber,
      property_plan_image_url: floorPlanCloudinaryUrl,
      property_other_image_url: other_images_array,
    };

    console.log(propertyObject);

    try {
      const response = await createProperty(propertyObject);
      console.log(response);
      if (response.data.data.id) {
        toast.success(`Property Created Successfully`, {
          autoClose: 2000,
        });
        setPropertyCreationLoading(false);
        setTimeout(() => {
          navigate("/properties/your-property");
        }, 2100);
      }
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setPropertyCreationLoading(false);
        setFormValidationError("No Server Response");
      } else if (err.originalStatus === 400) {
        setFormValidationError("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setFormValidationError("Unauthorized");
      } else {
        setFormValidationError("Login Failed");
      }
    }
  };

  useEffect(() => {
    setFormValidationError("");
  }, [
    propertyName,
    propertyAddress,
    propertyPrice,
    fullDetails,
    bedroomNumber,
    bathroomNumber,
    propertyFloorPlanArea,
    floorPlanDescription,
  ]);

  return (
    <>
      <AnimatedFadeInPage>
        <section className={styles.container}>
          <h1>Property Details</h1>
          <form onSubmit={handleFormSubmit}>
            <p className={styles.errorText}>{formValidationError}</p>
            <div className={styles.grid}>
              <div>
                <label htmlFor="propertyName">Property Name</label>
                <input
                  type="text"
                  placeholder="Your Property Name"
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                  name="Name"
                />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="Your Property Address"
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                  name="Address"
                />
              </div>

              <div>
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  placeholder="Price of Property"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                  name="Amount"
                />
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={propertyZipCode}
                  onChange={(e) => setPropertyZipCode(e.target.value)}
                  name="Zip Code"
                />
              </div>
            </div>

            <label htmlFor="textarea">Short Details</label>
            <textarea
              placeholder="Short Details Of Your Property"
              value={propertyShortDetails}
              onChange={(e) => setPropertyShortDetails(e.target.value)}
            />
            <label htmlFor="textarea">Full Details</label>
            <textarea
              placeholder="Full Details Of Your Property"
              className={styles.fullText}
              value={fullDetails}
              onChange={(e) => setFullDetails(e.target.value)}
              name="Full Details"
            />

            {/* Additional Info */}
            <h2>Addition Info</h2>
            <div className={styles.addInfo}>
              <div className={styles.smFlex}>
                <div>
                  <p className={styles.category}>Property Category</p>
                  <div className={styles.checks}>
                    <p>For Rent</p>
                    <label className={styles.switch}>
                      <input
                        name="For Rent"
                        type="checkbox"
                        checked={isForRent}
                        onChange={categoryIdHandler}
                      />
                      <span className={styles.slider}></span>
                    </label>
                  </div>
                  <div className={styles.checks}>
                    <p>For Sale</p>
                    <label className={styles.switch}>
                      <input
                        name="For Sale"
                        type="checkbox"
                        checked={isForSale}
                        onChange={categoryIdHandler}
                      />
                      <span className={styles.slider}></span>
                    </label>
                  </div>
                  {/* <div className={styles.checks}>
                    <p>For Lease</p>
                    <label className={styles.switch}>
                      <input type="checkbox" />
                      <span className={styles.slider}></span>
                    </label>
                  </div> */}
                </div>

                {/* <div>
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
                </div> */}

                <button
                  className={styles.btn}
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Add Property
                </button>
              </div>

              <div className={styles.verticalRule}></div>

              <div className={styles.flexRightContainer}>
                <div className={styles.flexRightContent}>
                  <div>
                    <label htmlFor="bedroom">Bedroom:</label>
                    <input
                      type="text"
                      className={styles.bedroomInput}
                      value={bedroomNumber}
                      onChange={(e) => setBedroomNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="bathroom">Bathroom:</label>
                    <input
                      type="text"
                      className={styles.bedroomInput}
                      value={bathroomNumber}
                      onChange={(e) => setBathroomNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyFloorPlanArea">
                      Property Size:
                    </label>
                    <input
                      type="text"
                      className={styles.propertyFloorPlanArea}
                      value={propertyFloorPlanArea}
                      onChange={(e) => setPropertyFloorPlanArea(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.floorPlanFlex}>
                  <div>
                    <label htmlFor="textarea">Floor Plan</label>
                    <textarea
                      placeholder="Describe Your Floor Plan"
                      className={styles.floorPlan}
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
                    you are offering and build trust. Upload <span>5</span>{" "}
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
                        <input
                          type="file"
                          name="otherImages"
                          multiple={true}
                          onChange={handleOtherImagesChange}
                          accept="image/png, image/jpeg, image/jpg"
                        />
                      </div>
                    </div>
                    {otherImagesPreview.length < 1 ? (
                      <>
                        <p>Add your Images</p>
                      </>
                    ) : (
                      <></>
                    )}
                    {otherImagesPreview.map((blob) => {
                      return (
                        <div className={styles.propertyUpload} key={blob}>
                          <img
                            src={blob}
                            alt="addedd image"
                            className={styles.uploadedImg}
                          />
                          {/* <img
                            src={img4}
                            alt="/"
                            className={styles.deleteBtn}
                          /> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
        {propertyCreationLoading ? (
          <>
            <LoadingScreen loading={propertyCreationLoading} />
          </>
        ) : (
          <></>
        )}
      </AnimatedFadeInPage>
      <ToastContainer />
    </>
  );
};

export default AddPropertyPage;
