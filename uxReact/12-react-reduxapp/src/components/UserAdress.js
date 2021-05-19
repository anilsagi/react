export const UserAddress = ({ user }) => {
    console.log(user.address);
    return (
      <div className ="Containerstyle" >
        <p><b>Address:</b>Street:{user.address.street}</p>
        <p>City:{user.address.city}</p>
        <p>Zipcode:{user.address.zipcode}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    );
  };