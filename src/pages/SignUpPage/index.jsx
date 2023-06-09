import styles from "./SignUpPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import signUpImage from "./SignUpAssets/signUpImage.png";
import add_image from "./SignUpAssets/add_image.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRegisterUserMutation } from "../../redux/features/users/usersApiSlice";
import { ToastContainer, toast } from "react-toastify";

const SignUpPage = () => {
  const navigate = useNavigate();
  //general page variables
  const [pageOne, setPageOne] = useState(true);
  const [registerDetails, setRegisterDetails] = useState({
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    userCloudinaryURL: "",
    userCategoryChoice: "",
  });
  const [registerUser] = useRegisterUserMutation();

  //pageOne Variables
  const [formValidationError, setFormValidationError] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+234");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //pageTwo Variables
  const [profileImage, setProfileImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
  const cloud_name = import.meta.env.VITE_CLOUD_NAME;
  const [userCloudinaryURL, setUserCloudinaryURL] = useState("");
  const [userCategoryChoice, setUserCategoryChoice] = useState("Seller");
  const [signUpError, setSignUpError] = useState("");

  const validateUserName = (_userName) => {
    const regex = /^\w+$/;
    return regex.test(_userName);
  };

  const validateEmail = (_email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(_email);
  };

  const validateNigerianPhoneNumber = (_phoneNumber) => {
    return /^\+234\d{10}$/.test(_phoneNumber);
  };

  const validateSimilarPassword = (_password, _confirmPassword) => {
    return _password === _confirmPassword ? true : false;
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const uploadImageToCloudinaryAndGetImageURL = async () => {
    try {
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/png" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/jpeg")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
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
        setImagePreview(null);
        return imageURL;
      }
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  // const uploadToCloudinaryTest = async (e) => {
  //   e.preventDefault();
  //   const response = await uploadImageToCloudinaryAndGetImageURL();
  //   setUserCloudinaryURL(response);
  //   alert(response);
  // };

  const updateCategoryBuyer = (e) => {
    e.preventDefault();
    setUserCategoryChoice("Buyer");
  };

  const updateCategorySeller = (e) => {
    e.preventDefault();
    setUserCategoryChoice("Seller");
  };

  const goToPageTwo = (e) => {
    e.preventDefault();

    //fullName validation
    if (fullName.length < 0) {
      setFormValidationError("Full Name field cannot be empty.");
      return;
    }
    //userName validation
    if (!validateUserName(userName)) {
      setFormValidationError("User Name must be a single word. johnDoe");
      return;
    }
    //email validation
    if (!validateEmail(email)) {
      setFormValidationError(
        "Please enter a valid email address. joedoes@example.com"
      );
      return;
    }
    //phoneNumber validation
    if (!validateNigerianPhoneNumber(phoneNumber)) {
      setFormValidationError(
        "PhoneNumber must start with +234 and end with 10 other digits."
      );
      return;
    }
    //password length validation
    if (password.length < 5) {
      setFormValidationError("Password must be at least 5 characters");
      return;
    }
    //similarPassword validation
    if (!validateSimilarPassword(password, confirmPassword)) {
      setFormValidationError(
        "Passowrd and Confirm Password must be the same value."
      );
      return;
    }
    //create the object from respective fields to be used in backedn api call
    //create the object from respective fields to be used in backedn api call
    //create the object from respective fields to be used in backedn api call
    const registrationObject = {
      fullName: fullName,
      userName: userName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      userCloudinaryURL: userCloudinaryURL,
      userCategoryChoice: userCategoryChoice,
    };
    setRegisterDetails(registrationObject);
    setFormValidationError("");
    setPageOne(false);
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   if (imagePreview) {
  //     const cloudinaryResponse = await uploadImageToCloudinaryAndGetImageURL();
  //     setUserCloudinaryURL(cloudinaryResponse);
  //   } else {
  //     setUserCloudinaryURL("");
  //   }

  //   //update respective fields to be used in backedn api call
  //   setRegisterDetails({
  //     ...registerDetails,
  //     userCategoryChoice: userCategoryChoice,
  //     userCloudinaryURL: userCloudinaryURL,
  //   });

  //   //this is where we make the API call after creating the large object from the all the params.
  //   const response = await registerUser(registerDetails);

  //   //after successfully registering , navigate to login page and display message
  //   if (response.data.status === 200) {
  //     toast.success(
  //       `Account Created Successfully, you will be routed to the login Page to login`,
  //       {
  //         autoClose: 2000,
  //       }
  //     );
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 3500);
  //   }
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (imagePreview) {
      const cloudinaryResponse = await uploadImageToCloudinaryAndGetImageURL();
      setUserCloudinaryURL(cloudinaryResponse);
    } else {
      setUserCloudinaryURL("");
    }

    //update respective fields to be used in backedn api call
    setRegisterDetails({
      ...registerDetails,
      userCategoryChoice: userCategoryChoice,
      userCloudinaryURL: userCloudinaryURL,
    });

    try {
      await registerUser(registerDetails);
      toast.success(
        `Account Created Successfully, you will be routed to the login Page to login`,
        {
          autoClose: 3200,
        }
      );
      setTimeout(() => {
        navigate("/login");
      }, 3500);
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setSignUpError("No Server Response");
      } else if (err.originalStatus === 400) {
        setSignUpError("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setSignUpError("Unauthorized");
      } else {
        setSignUpError("Login Failed");
      }
    }
  };

  useEffect(() => {
    setFormValidationError("");
  }, [userName, phoneNumber, password, email, confirmPassword]);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SignUpPage}>
          <img src={signUpImage} alt="" />
          <section>
            {/* FORM FOOTER */}
            {/* FORM FOOTER */}
            <div className={styles.FormHeader}>
              <h4>Welcome to</h4>
              <h3>Elite Homes</h3>
              <p>Let’s get you started, input your details below.</p>
            </div>

            {/* MAIN FORM */}
            {/* TWO-PAGE FORM */}
            <form className={styles.signUp_form}>
              {pageOne ? (
                <>
                  {/* PAGE ONE FORM */}
                  {/* PAGE ONE FORM */}
                  <p className={styles.errorText}>{formValidationError}</p>

                  {/* <p className={styles.errorText}>Passwords do not match</p>
                  <p className={styles.errorText}>Invalid Email Address</p>
                  <p className={styles.errorText}>
                    Phone number must be 11 numbers
                  </p> */}

                  <input
                    type="text"
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </>
              ) : (
                <>
                  {/* PAGE TWO FORM */}
                  {/* PAGE TWO FORM */}
                  <p className={styles.errorText}>{signUpError}</p>
                  <div>
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className={styles.upload_container}>
                    <img src={imagePreview ? imagePreview : add_image} alt="" />
                    <div className={styles.upload_initiator}>
                      <h3>Upload Image</h3>
                      <p>
                        Torem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    {/* i used this test for the cloudinary upload */}
                    {/* <button onClick={(e) => uploadToCloudinaryTest(e)}>
                      Upload to Cloudinary
                    </button> */}
                  </div>
                  <div className={styles.category_btns}>
                    <button
                      className={
                        userCategoryChoice === "Seller"
                          ? styles.user_btn_active
                          : styles.user_btn_inactive
                      }
                      onClick={(e) => updateCategorySeller(e)}
                    >
                      Seller
                    </button>
                    <button
                      className={
                        userCategoryChoice === "Buyer"
                          ? styles.user_btn_active
                          : styles.user_btn_inactive
                      }
                      onClick={(e) => updateCategoryBuyer(e)}
                    >
                      Buyer
                    </button>
                  </div>
                  <div className={styles.checkbox_category}>
                    <input type="checkbox" />
                    <p>Yes, I want to receive Elite Homes mail.</p>
                  </div>
                </>
              )}
            </form>

            {/* FORM FOOTER */}
            {/* FORM FOOTER */}
            <div className={styles.FormFooter}>
              <button
                onClick={
                  pageOne ? (e) => goToPageTwo(e) : (e) => handleFormSubmit(e)
                }
              >
                {pageOne ? "Continue" : "Register"}
              </button>
              <h4>
                Already have an account?{" "}
                <span>
                  <Link to={"/login"} className={styles.login_btn}>
                    Log In
                  </Link>
                </span>
              </h4>
            </div>
          </section>
          <ToastContainer />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SignUpPage;
