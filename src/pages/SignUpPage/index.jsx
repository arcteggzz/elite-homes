import styles from "./SignUpPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import signUpImage from "./SignUpAssets/signUpImage.png";
import add_image from "./SignUpAssets/add_image.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useRegisterUserMutation } from "../../redux/features/users/usersApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../../utils/LoadingScreen";
import { BASE_URL, apiRoutePaths } from "../../utils/apiRoutePaths";

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
  const [accountCreationLoading, setAccountCreationLoading] = useState(false);
  // const [registerUser] = useRegisterUserMutation();

  //pageOne Variables
  const [formValidationError, setFormValidationError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+234");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //pageTwo Variables
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLandlord, setIsLandlord] = useState(0);
  // const [signUpError, setSignUpError] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const validateName = (name) => {
    return name.length < 1;
  };

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

  const updateCategoryBuyer = (e) => {
    e.preventDefault();
    setIsLandlord(0);
  };

  const updateCategorySeller = (e) => {
    e.preventDefault();
    setIsLandlord(1);
  };

  const goToPageTwo = (e) => {
    e.preventDefault();

    //firstName validation
    if (validateName(firstName)) {
      setFormValidationError("First Name cannot be empty.");
      return;
    }
    //lastName validation
    if (validateName(lastName)) {
      setFormValidationError("Last Name cannot be empty.");
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
    if (password.length < 8) {
      setFormValidationError("Password must be at least 8 characters");
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
      username: userName,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      confirm_password: password,
      phone_number: phoneNumber,
    };

    setRegisterDetails(registrationObject);
    setFormValidationError("");
    setPageOne(false);
  };

  // function formDataToObject(formData) {
  //   const object = {};
  //   for (let [key, value] of formData.entries()) {
  //     object[key] = value;
  //   }
  //   return object;
  // }

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("fired");

  //   if (!imagePreview) {
  //     setFormValidationError("Please select a Profile Image");
  //     return;
  //   }

  //   if (profileImage.size > 1100000) {
  //     setFormValidationError(
  //       "Profile Image File size too big. Plese select a profile image less than 1mb"
  //     );
  //     return;
  //   }

  //   setAccountCreationLoading(true);

  //   const finalRegistrationObject = {
  //     profile_picture: profileImage,
  //     is_landlord: isLandlord,
  //     ...registerDetails,
  //   };
  //   console.log(isLandlord);

  //   console.log(finalRegistrationObject, "finalRegistrationObject");
  //   // console.log(userName, "username");

  //   const bodyFormData = new FormData();
  //   bodyFormData.append("username", userName);
  //   bodyFormData.append("first_name", firstName);
  //   bodyFormData.append("last_name", lastName);
  //   bodyFormData.append("email", email);
  //   bodyFormData.append("password", password);
  //   bodyFormData.append("confirm_password", password);
  //   bodyFormData.append("phone_number", phoneNumber);
  //   bodyFormData.append("profile_picture", profileImage);
  //   bodyFormData.append("is_landlord", isLandlord);

  //   // console.log(`${bodyFormData.get(userName)} "userName"`);
  //   const objectData = formDataToObject(bodyFormData);
  //   console.log(objectData);

  //   const key = "is_landlord";
  //   const value = bodyFormData.get(key);
  //   console.log(value);

  //   try {
  //     const response = await registerUser(bodyFormData);
  //     console.log(response);
  //     if (response.data.user) {
  //       toast.success(
  //         `Account Created Successfully, you will be routed to the login Page to login`,
  //         {
  //           autoClose: 3200,
  //         }
  //       );
  //       setAccountCreationLoading(false);
  //       setTimeout(() => {
  //         navigate("/login");
  //       }, 3500);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     if (!err?.originalStatus) {
  //       // isLoading: true until timeout occurs
  //       setAccountCreationLoading(false);
  //       setSignUpError("No Server Response");
  //     } else if (err.originalStatus === 400) {
  //       setSignUpError("Missing Username or Password");
  //     } else if (err.originalStatus === 401) {
  //       setSignUpError("Unauthorized");
  //     } else {
  //       setSignUpError("Login Failed");
  //     }
  //   }
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!imagePreview) {
      setFormValidationError("Please select a Profile Image");
      return;
    }

    if (profileImage.size > 1100000) {
      setFormValidationError(
        "Profile Image File size too big. Plese select a profile image less than 1mb"
      );
      return;
    }

    setAccountCreationLoading(true);

    const finalRegistrationObject = {
      profile_picture: profileImage,
      is_landlord: isLandlord,
      ...registerDetails,
    };

    console.log(finalRegistrationObject, "finalRegistrationObject");

    const bodyFormData = new FormData();
    bodyFormData.append("username", userName);
    bodyFormData.append("first_name", firstName);
    bodyFormData.append("last_name", lastName);
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);
    bodyFormData.append("confirm_password", password);
    bodyFormData.append("phone_number", phoneNumber);
    bodyFormData.append("profile_picture", profileImage);
    bodyFormData.append("is_landlord", isLandlord);

    // console.log(`${bodyFormData.get(userName)} "userName"`);
    // const objectData = formDataToObject(bodyFormData);
    // console.log(objectData);

    const requestOptions = {
      method: "POST",
      body: bodyFormData,
    };

    fetch(`${BASE_URL}${apiRoutePaths.auth.register}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.user) {
          toast.success(
            `Account Created Successfully, you will be routed to the login Page to login`,
            {
              autoClose: 3200,
            }
          );
          setAccountCreationLoading(false);
          setTimeout(() => {
            navigate("/login");
          }, 3500);
        }
      })
      .catch((error) => {
        console.log(error);
        setAccountCreationLoading(false);
        setSignUpError("No Server Response");
      });
  };

  useEffect(() => {
    setFormValidationError("");
  }, [userName, phoneNumber, password, email, confirmPassword, profileImage]);

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
            <form className={styles.signUp_form} onSubmit={handleFormSubmit}>
              {pageOne ? (
                <>
                  {/* PAGE ONE FORM */}
                  {/* PAGE ONE FORM */}
                  <p className={styles.errorText}>{formValidationError}</p>

                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Username. Must be one word."
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
                    placeholder="Password must be 8 characters."
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
                  <p className={styles.errorText}>{formValidationError}</p>
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
                      <p>Add your image. Must be a jpg, jpeg, or png file.</p>
                    </div>

                    {/* i used this test for the cloudinary upload */}
                    {/* <button onClick={(e) => uploadToCloudinaryTest(e)}>
                      Upload to Cloudinary
                    </button> */}
                    {/* i used this test console.log of image */}
                    {/* <button onClick={(e) => viewImageType(e)}>
                      View Image File
                    </button> */}
                  </div>
                  <div className={styles.category_btns}>
                    <button
                      className={
                        isLandlord
                          ? styles.user_btn_active
                          : styles.user_btn_inactive
                      }
                      onClick={(e) => updateCategorySeller(e)}
                    >
                      LandLord
                    </button>
                    <button
                      className={
                        !isLandlord
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
              {!pageOne ? <button type="submit">Register</button> : <></>}
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
        </main>
        {accountCreationLoading ? (
          <>
            <LoadingScreen loading={accountCreationLoading} />
          </>
        ) : (
          <></>
        )}
      </AnimatedFadeInPage>
      <ToastContainer />
    </>
  );
};

export default SignUpPage;
