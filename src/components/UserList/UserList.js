import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "store/slices/usersSlice";

const UserList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      {error && <div>Oops I did it again</div>}
      {users.length > 0 && users.map((currentUserObj) => <article>{JSON.stringify(currentUserObj)}</article>)}
    </section>
  );
};

export default UserList;
