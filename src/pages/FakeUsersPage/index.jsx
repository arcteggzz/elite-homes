import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import {
  useGetAllUsersQuery,
  useRegisterUserMutation,
} from "../../redux/features/users/usersApiSlice";
import { useState } from "react";

const FakeUsersPage = () => {
  //logic for loading users
  const {
    data: allUsers,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllUsersQuery();

  //logic for creating users
  //logic for creating users
  //logic for creating users
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userImage, setUserImage] = useState("");
  const [message, setMessage] = useState("");
  const [registerUser] = useRegisterUserMutation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newUserObject = {
      username,
      email,
      userImage,
    };
    const response = await registerUser(newUserObject);
    setMessage(response.data.message);
  };

  //JSX PART STARTS HERE 4 LOADING USERS
  //JSX PART STARTS HERE 4 LOADING USERS
  //JSX PART STARTS HERE 4 LOADING USERS
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <>
        {allUsers.map((user) => {
          return (
            <>
              <div key={user.email}>
                <p>{user.username}</p>
                <p>{user.email}</p>
              </div>
            </>
          );
        })}
      </>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <AnimatedFadeInPage>
        {content}
        <main>
          <section>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
              <input
                type="text"
                onChange={(e) => setUserImage(e.target.value)}
              />
              <button>Submit</button>
            </form>
            <p>{message}</p>
          </section>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default FakeUsersPage;
