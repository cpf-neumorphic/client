import React, { useContext, useState, useRef } from "react";
import IdleTimer from "react-idle-timer";
import { getPageIdFromSlug } from "../asset/pages";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

const idleTimer = null;

export const ActivityTracker = (props) => {
  const { currentUser } = useContext(UserContext);
  const [curActiveState, setCurActiveState] = useState([
    true,
    window.location.pathname,
  ]);

  const timeout = 5000;

  const _onAction = (currentUser, curActiveState, setCurActiveState) => {
    console.log(curActiveState);
    console.log(curActiveState[1] !== window.location.pathname);
    console.log(curActiveState[1] === window.location.pathname);
    if (curActiveState[0]) {
      if (curActiveState[1] !== window.location.pathname) {
        console.log("Different slug", idleTimer.getElapsedTime());
        setCurActiveState([true, window.location.pathname]);
        idleTimer.reset();
      }
    } else {
      console.log("reset");
      idleTimer.reset();
      setCurActiveState([true, window.location.pathname]);
    }
  };

  const _onActive = (currentUser, curActiveState, setCurActiveState) => {
    console.log(curActiveState);
    console.log(curActiveState[1] !== window.location.pathname);
    console.log(curActiveState[1] === window.location.pathname);
    if (curActiveState[0]) {
      if (curActiveState[1] !== window.location.pathname) {
        console.log("Different slug", idleTimer.getElapsedTime());
        setCurActiveState([true, window.location.pathname]);
        idleTimer.reset();
      }
    } else {
      console.log("reset");
      idleTimer.reset();
      setCurActiveState([true, window.location.pathname]);
    }
  };

  /**
   * POST user usage to API
   * @param {object} data
   */
  const updateUsage = (currentUser) => {
    let slug = window.location.pathname;
    let page_idx = getPageIdFromSlug(slug);
    let sendInfor = {
      nric: currentUser.nric,
      page_id: String(page_idx),
      duration: String(idleTimer.getElapsedTime()),
    };
    axios
      .post(
        "http://13.67.40.27:3001/api/updateUsage",
        JSON.stringify(sendInfor)
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Trigger on idle more then 5 second.
   * @param {object} currentUser
   * @param {function} setCurActiveState
   */
  const _onIdle = (currentUser, setCurActiveState) => {
    // updateUsage(currentUser);
    console.log("idle", idleTimer.getElapsedTime());
    setCurActiveState([false, window.location.pathname]);
    idleTimer.reset();
  };

  let onAction = _onAction(currentUser, curActiveState, setCurActiveState);
  let onActive = _onActive(currentUser, curActiveState, setCurActiveState);
  let onIdle = _onIdle(currentUser, setCurActiveState);
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
      stopOnIdle={false}
    />
  );
};
