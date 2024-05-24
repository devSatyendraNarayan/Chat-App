// Users.js
import React from 'react';
import User from './User';

function Users() {
    var avatarLink="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
  // Array of user data
  const usersData = [
    { name: "Alice", email: "alice@example.com", avatarUrl: avatarLink},
    { name: "Bob", email: "bob@example.com", avatarUrl: avatarLink },
    { name: "Charlie", email: "charlie@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    { name: "David", email: "david@example.com", avatarUrl: avatarLink},
    
  ];

  return (
    <>
      {/* Map through the usersData array and render a User component for each user */}
      {usersData.map((userData, index) => (
        <User
          key={index}
          name={userData.name}
          email={userData.email}
          avatarUrl={userData.avatarUrl}
          
        />
      ))}
    </>
  );
}

export default Users;
