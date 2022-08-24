import React, { useState } from 'react';
import './User.css'
const User = (props) => {
//   console.log(props);
  const {picture, name, email, phone, location} = props.user;
  const fullName = `${name.title} ${name.first} ${name.last}`;
  const [mobile, setMobile] = useState("");
  const showNumber = () => {
       setMobile(phone);
  }
    return (
        <div className='container'>
          <div className="img-container">
            <img src={picture.large} alt="" />
          </div>
          <div className="description">
            <h1>{fullName}</h1>
             <h2>Country : {location.country}</h2>
            <h3>City : {location.city}</h3>
            <p><strong>Phone :</strong> {mobile}</p>
            <p><strong>Email :</strong> {email}</p>
            <button onClick={showNumber}>Phone</button>
            <button onClick={() => props.addedMe(props.user)}>Add Me</button>
          </div>
        </div>
    );
};

export default User;