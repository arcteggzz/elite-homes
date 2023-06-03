// import styles from "./MockProtectedPage.module.scss";
// import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useGetAdminsQuery } from "../../redux/features/admin/adminApiSlice";

const MockProtectedPage = () => {
  const {
    data: admins,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAdminsQuery();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <section className="users">
        <h1>Users List</h1>
        <ul>
          {admins.map((admin, i) => {
            return (
              <>
                <div key={i}>
                  <li>{admin.username}</li>
                  <li>{admin.email}</li>
                  <br />
                </div>
              </>
            );
          })}
        </ul>
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content;
};

export default MockProtectedPage;
