import React from 'react'


const getRandomUser = async () => {
const endpoint = "https://randomuser.me/api";
  const response = await fetch(endpoint);
  const data = await response.json();
  setRandomUser(data.results[0]);
};