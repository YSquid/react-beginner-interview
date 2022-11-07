import React, { useState, useEffect } from "react";

function RandomUser() {
  const [randomUser, setRandomUser] = useState("");
  
  const getRandomUser = async () => {
    const endpoint = "https://randomuser.me/api";
    const response = await fetch(endpoint);
    const data = await response.json();
    setRandomUser(data.results[0]);
  };
  
  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <>
      <p>
        {randomUser ? `${randomUser.name.first} ${randomUser.name.last}` : null}
      </p>
      <img src={randomUser ? randomUser.picture.thumbnail : null} />
    </>
  );
}
export default RandomUser;
