import React from "react";
import IdleTimer from "react-idle-timer";
import { getPageIdFromSlug } from "../asset/pages";
import axios from "axios";

const _onAction = (e) => {
  console.log("user did something", e);
};

const _onActive = (e) => {
  console.log("user is active", e);
};

const updateUsage = (data) => {
  // POST user usage onto the cloud.
  axios
    .post("http://13.67.40.27:3001/api/updateUsage", JSON.stringify(data))
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const _onIdle = (e) => {
  /* 
  Trigger on idle after 5 second.
   */
  let slug = window.location.pathname;
  let page_idx = getPageIdFromSlug(slug);
  let sendInfor = {
    nric: "S9526187D",
    page_id: page_idx,
    duration: idleTimer.getElapsedTime(),
  };
  // updateUsage(sendInfor);

  console.log(sendInfor);
};

let idleTimer = null;
let onAction = _onAction.bind(this);
let onActive = _onActive.bind(this);
let onIdle = _onIdle.bind(this);
const timeout = 5000;

export default function ActivityTracker(props) {
  return (
    <IdleTimer
      ref={(ref) => {
        idleTimer = ref;
      }}
      element={document}
      onActive={onActive}
      onIdle={onIdle}
      onAction={onAction}
      debounce={250}
      timeout={timeout}
    />
  );
}
