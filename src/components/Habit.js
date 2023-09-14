import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit, editHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const Habit = ({ habit }) => {
  const { addToast } = useToasts();
  const today = new Date();
  const todayDay = today.getDay();
  let countDone = 0;
  //loop for getting habit done count
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      countDone++;
    }
  }

  // call use navigate hook from react-router-dom in a navigate varriable
  const navigate = useNavigate();

  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // function call after click delete button on habit list
  const handleDelete = () => {
    console.log("delete");
    dispatch(deleteHabit(habit.id));
    addToast("Your habit deleted successfully", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const handleEdit = () => {
    const habitName = document.getElementById("habitNames").value;
    dispatch(editHabit({ id: habit.id, name: habitName }));
    addToast("Your habit Updated successfully", {
      appearance: "success",
      autoDismiss: true,
    });
    document.getElementById("habitName").value = "";
  };
  const setId = () => {
    localStorage.setItem("id", habit.id);
    navigate("/week-view");
  };

  return (
    <div className="habit">
      <div className="habit-left">
        {/* <i className="fa-solid fa-hashtag"></i> */}
        <i className="fa-solid fa-arrow-right" onClick={setId}></i>
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
          <p className="day-complete">
            {countDone}/{todayDay + 3} days
          </p>
        </div>
      </div>
      <div className="habit-right">
        <div className="editName" style={{ marginRight: "3px" }}>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-edit"></i>
          </button>
        </div>
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week"></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit habit
              </h5>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="habitNames"
                    placeholder={habit.name}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habit;
