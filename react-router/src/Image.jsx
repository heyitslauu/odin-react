import { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if(response.status >= 400) {
          throw new Error("Server Error")
        }
        return response.json();
      })
      .then((data) => setImageUrl(data[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  if (error) return <p>A network error was encountered</p>
  if (loading) return <p>Loading...</p>;
  return (
    imageURL && ( 
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} />
      </>
    )
  );

}

export default Image;