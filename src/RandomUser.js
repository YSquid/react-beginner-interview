import React, { useState, useEffect } from "react";

function RandomUser() {
  const [randomUser, setRandomUser] = useState("");

  useEffect(() => {
    const getRandomUser = async () => {
      const endpoint = "https://randomuser.me/api";
      const response = await fetch(endpoint);
      const data = await response.json();
      setRandomUser(data.results);
    };
    getRandomUser();
  }, []);

  return (
  <p>{randomUser.gender}</p>
  );
}
export default RandomUser;
