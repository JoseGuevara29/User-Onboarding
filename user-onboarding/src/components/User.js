import React from "react";

function Friend({ details }) {
  if (!details) {
    console.log(details);
    return <h3>Working fetching your friend&apos;s details...</h3>;
  }
  const name = `${details.first_name} ${details.last_name}`;
  console.log(details);

  return (
    <div className="friend container">
      <h2>
        {name}
        {details.username}
      </h2>
      <p>Email: {details.email}</p>
    </div>
  );
}

export default Friend;
