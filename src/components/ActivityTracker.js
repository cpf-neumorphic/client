import React from "react";
import IdleTimer from "react-idle-timer";
import { getPageIdFromSlug } from "../asset/pages";

const _onAction = (e) => {
  console.log("user did something", e);
};

const _onActive = (e) => {
  console.log("user is active", e);
};

const _onIdle = (e) => {
  // send *sendInfor* to API
  // console.log("user is idle", e);
  let slug = window.location.pathname;
  let page_idx = getPageIdFromSlug(slug);
  let sendInfor = {
    NRIC: "S9526187D",
    page_id: page_idx,
    time_spent: idleTimer.getElapsedTime(),
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
    <div>
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
    </div>
  );
}
