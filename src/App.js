import { Fragment, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const userApi = "https://api.randomuser.me/";

  useEffect(() => {
    fetchData(userApi);
  }, []);

  const fetchData = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const { results } = await res.json();
    setData(results[0]);
    console.log(data);
    setLoading(false);
  };

  return (
    <>
      <h2>
        <button
          style={{
            backgroundColor: "lime",
            height: "60px",
            fontSize: "30px",
            fontWeight: "900"
          }}
          onClick={() => fetchData(userApi)}
        >
          Click for New User
        </button>
      </h2>
      {loading && <h1>Loading....</h1>}
      {data.length !== 0 ? (
        <div>
          <h1>{data.name.first + "  " + data.name.last}</h1>
          <img src={data.picture.large} alt={data.name} />
          <p>Gender: {data.gender} </p>
          <p>DOB: {data.dob.date} </p>
          <p>Age: {data.dob.age} </p>
          <p>City: {data.location.city} </p>
          <p>State: {data.location.state} </p>
          <p>Country: {data.location.country} </p>
          <p>Phone: {data.phone} </p>
          <p>Email: {data.email} </p>
        </div>
      ) : (
        <h1>Error in Fetch</h1>
      )}
    </>
  );
}
