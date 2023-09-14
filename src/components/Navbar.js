
import React, { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const navigate  = useNavigate();
   // change state acording time
   const [hour, setHour] = useState(0);
   useEffect(() => {
     const date = new Date();
     setHour(date.getHours());
   }, []);

  // function for add habit
  const handleSave = () => {
    const habitName = document.getElementById("habitName").value;
    console.log(habitName,"Rod")
    dispatch(addHabit(habitName));
    // alert("Your habit added successfully");
    addToast("Your habbit added successfully", {
      appearance: "success",
      autoDismiss: true,
    });
    document.getElementById("habitName").value = "";
  };

  return (
    <>
      <div className="navbar">
      <h3 >
          {/* acording to time its shows morning,afternoon,evening and night */}
        Good  {hour <= 12
            ? "Morning"
            : hour <= 17
            ? "Afternoon"
            : hour <= 21
            ? "Evening"
            : "Night"}
        </h3>
          <h2 style={{color:'#36b9ea',cursor:'pointer'}} onClick={()=>navigate('/')}>Habit-Tracker</h2>
        <div className="right-nav">
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            + Add Habits
          </button>
        </div>
      </div>

      {/* modal for add habit form */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
