import React from "react";

async function getCustomers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const UsersPage = async () => {
  const users: any = await getCustomers();
  let Users = null;

  if (users) {
    Users = (
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Usrname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {users?.map((user: any) => (
              <tr>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">
        <span>Users </span>
        <span className="font-light text-sm">- Server side rendering</span>
      </h2>
      {Users}
    </div>
  );
};

export default UsersPage;
