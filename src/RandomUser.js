import React, { useState, useEffect } from "react";

function RandomUser({randomUser, setRandomUser}) {
  
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
      <br/>
      {/*Maybe if I move this button to the users component then I can on click save the random users to users state and fetch new? */}
      <button onClick={getRandomUser}>Get New User</button>
    </>
  );
}
export default RandomUser;
