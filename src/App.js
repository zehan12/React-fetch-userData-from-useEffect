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
    setLoading(false);
  };

  return (
    <>
      {loading && <h1>Loading....</h1>}
      {data.length !== 0 ? (
        <div>
          <h1>{data.name.first + "  " + data.name.last}</h1>
          <img src={data.picture.medium} alt={data.name} />
          <p>Gender: {data.gender} </p>
          <p>DOB: {data.dob.date} </p>
          <p>Age: {data.dob.age} </p>
          <p>Loacation: {data.location.country} </p>
          <button onClick={() => fetchData(userApi)}>New User</button>
        </div>
      ) : (
        <h1>Error in Fetch</h1>
      )}
    </>
  );
}
