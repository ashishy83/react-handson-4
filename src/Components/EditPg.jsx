import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import Data from "./DataContext";
import NavBar from "./NavBar";

const EditPg = () => {
  // const context = useContext(Data);
  const [info, setInfo] = useState({
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  });

  const onCancel = () => {};

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.Name]: e.target.value });
  };
  return (
    <div>
      <NavBar />
      <div className="input-container">
        <input
          type="text"
          value={info.Name}
          name="Name"
          onChange={changeHandler}
          placeholder="Name"
        />
        <input
          type="text"
          value={info.Age}
          name="Age"
          onChange={changeHandler}
          placeholder="Age"
        />
        <input
          type="text"
          value={info.Course}
          name="Course"
          onChange={changeHandler}
          placeholder="Course"
        />
        <input
          type="text"
          value={info.Batch}
          name="Batch"
          onChange={changeHandler}
          placeholder="Batch"
        />
      </div>
      <div className="btns">
        <button onClick={onCancel} className='cancel-btn'><Link to={'/student'} className='cancel-link'>Cancel</Link> </button>
        <button className='cancel-btn'>Update</button>
      </div>
    </div>
  );
};

export default EditPg;
