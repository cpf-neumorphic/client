import React, { useState, useEffect, createContext } from "react";
/**
 * User definition
 * @typedef {Object} User
 * @property {string} nric - User's NRIC
 * @property {string} name - User's Name
 * @property {number[]} recommendations - Array of page ids representing user's recommendations generated by ML model
 * @property {number[]} favouries - Array of page ids representing user's favouries add by user
 */

/** @type {User[]} */
const demoUsers = [
  {
    nric: "S9250265W",
    name: "Billy Martin",
    recommendations: [3, 0, 2],
    favouries: [0, 1, 2, 3, 4],
    OA: 1155.22,
    SA: 315.06,
    MA: 630.12,
  },
  {
    nric: "S6548272X",
    name: "Evelyn Kane",
    recommendations: [6, 3, 5],
    favouries: [3, 4, 5, 6, 7],
    OA: 5011.22,
    SA: 10010.06,
    MA: 2020.12,
  },
];

/**
 * A list of demo users.
 * @type {User[]} */
const allUsers = demoUsers;

/**
 * The current user.
 * @type {User} */
let currentUser = demoUsers[0];

/**
 * Set current user.
 * @param {string} nric
 */
let setCurrentUser = (nric) => {};

export const UserContext = createContext({
  currentUser,
  allUsers,
  setCurrentUser,
});

export const UserProvider = (props) => {
  const [currentNric, setCurrentNric] = useState(demoUsers[0].nric);

  useEffect(() => {
    currentUser = demoUsers.find((user) => user.nric === currentNric);
  }, [currentNric]);

  setCurrentUser = (nric) => {
    const selectedUser = demoUsers.find((user) => user.nric === nric);
    if (selectedUser) {
      setCurrentNric(nric);
      currentUser = selectedUser;
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, allUsers, setCurrentUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
