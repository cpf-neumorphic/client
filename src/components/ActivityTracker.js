import React from "react";
import IdleTimer from "react-idle-timer";

const _onAction = (e) => {
  console.log("user did something", e);
};

const _onActive = (e) => {
  console.log("user is active", e);
};

const _onIdle = (e) => {
  // send *sendInfor* to API
  let sendInfor = null;
  console.log("user is idle", e);
  console.log("last active", idleTimer.getLastActiveTime());
  sendInfor = {
    NRIC: "S9526187D",
    Usage: [
      {
        page_id: window.location.pathname,
        time_spent: idleTimer.getElapsedTime(),
      },
    ],
  };
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
