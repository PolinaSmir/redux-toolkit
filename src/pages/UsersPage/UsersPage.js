import React from "react";
import Header from "components/Header/Header";
import UserList from "components/UserList/UserList";

const UsersPage = () => {
  return (
    <>
      <Header />
      <h1>Our clients</h1>
      <UserList />
    </>
  );
};

export default UsersPage;
