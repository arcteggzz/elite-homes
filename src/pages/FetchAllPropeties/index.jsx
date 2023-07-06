//          ***********Using RTK**********
import { useGetAllPropertiesQuery } from "../../redux/features/property/propertyApiSlice";

const FetchAllPropeties = () => {
  const { data: allProperties } = useGetAllPropertiesQuery();

  return (
    <div>
      {allProperties?.data?.map((properties) => (
        <li key={properties.id}>{properties.property_name}</li>
      ))}
    </div>
  );
};

export default FetchAllPropeties;



//         **************Using Fetch()****************
// import { useEffect, useState } from "react";

// const FetchAllPropeties = () => {
//   const [allProperties, setAllProperties] = useState([]);

//   const fetchProperties = () => {
//     fetch("http://52.23.76.53/api/v1/properties")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setAllProperties(data);
//       });
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   return <div>{allProperties?.data?.map(properties => (<li key={properties.id}>{properties.property_name}</li>))}</div>;
// };

// export default FetchAllPropeties;
