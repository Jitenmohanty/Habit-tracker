import React from "react";
import { useDispatch } from "react-redux";
import {
  habitDone,
  habitNone,
  habitUnDone,
} from "../redux/features/habitSlice";
import { useToasts } from "react-toast-notifications";

const DayView = ({ day }) => {
  const { addToast } = useToasts();
  // get today date
  const today = new Date();
  // get day from today date
  const todayDay = today.getDay();

  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // get date details from providing date
  const date = new Date(day.yyyy, day.mm, day.dd);

  // function call after click done icon--------------
  const markToDone = () => {
    if (day.id > todayDay) {
      addToast("You cannot change your next days status", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    // call habit done action from reducer
    dispatch(habitDone(day.id));
  };
  // -------------------------------------------------

  // function call after click undone icon------------
  const markToUnDone = () => {
    if (day.id > todayDay) {
      addToast("You cannot change your next days status", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    // call habit undone action from reducer
    dispatch(habitUnDone(day.id));
  };
  // --------------------------------------------------

  // function call after click none icon--------------
  const markToNone = () => {
    if (day.id > todayDay) {
      addToast("You cannot change your next days status", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    // call habit none action from reducer
    dispatch(habitNone(day.id));
  };
  // -------------------------------------------------

  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </p>
      <div className="i-container">
        <i
          className={
            day.isDone === true
              ? "fa-solid fa-circle-check circle-icon active"
              : "fa-solid fa-circle-check circle-icon"
          }
          onClick={markToDone}
        ></i>
        <i
          className={
            day.isDone === false
              ? "fa-solid fa-circle-xmark circle-icon active"
              : "fa-solid fa-circle-xmark circle-icon"
          }
          onClick={markToUnDone}
        ></i>
        <i
          className={
            day.isDone === ""
              ? "fa-solid fa-circle-minus circle-icon active"
              : "fa-solid fa-circle-minus circle-icon"
          }
          onClick={markToNone}
        ></i>
      </div>
    </div>
  );
};

export default DayView;
