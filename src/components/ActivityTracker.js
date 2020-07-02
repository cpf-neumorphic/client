import React, { useContext, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import { getPageIdFromSlug } from "../asset/pages";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

let idleTimer = null;

export const ActivityTracker = (props) => {
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  const timeout = 5000;

  // Called whenever pathname changes
  useEffect(() => {
    // updateUsage(currentUser.nric, prevPathname);
    console.log("Page changed: ", idleTimer.getElapsedTime());
    idleTimer.reset();
    setPrevPathname(location.pathname);
  }, [location.pathname]);

  // const _onAction = (currentUser, curActiveState, setCurActiveState) => {
  //   console.log(curActiveState);
  //   console.log(curActiveState[1] !== window.location.pathname);
  //   console.log(curActiveState[1] === window.location.pathname);
  //   if (curActiveState[0]) {
  //     if (curActiveState[1] !== window.location.pathname) {
  //       console.log("Different slug", idleTimer.getElapsedTime());
  //       setCurActiveState([true, window.location.pathname]);
  //       idleTimer.reset();
  //     }
  //   } else {
  //     console.log("reset");
  //     idleTimer.reset();
  //     setCurActiveState([true, window.location.pathname]);
  //   }
  // };

  // const _onActive = (currentUser, curActiveState, setCurActiveState) => {
  //   console.log(curActiveState);
  //   console.log(curActiveState[1] !== window.location.pathname);
  //   console.log(curActiveState[1] === window.location.pathname);
  //   if (curActiveState[0]) {
  //     if (curActiveState[1] !== window.location.pathname) {
  //       console.log("Different slug", idleTimer.getElapsedTime());
  //       setCurActiveState([true, window.location.pathname]);
  //       idleTimer.reset();
  //     }
  //   } else {
  //     console.log("reset");
  //     idleTimer.reset();
  //     setCurActiveState([true, window.location.pathname]);
  //   }
  // };

  /**
   * Trigger on idle more then 5 second.
   */
  const onIdle = () => {
    // updateUsage(currentUser.nric, location.pathname);
    console.log("onIdle: Timer pause & reset -", idleTimer.getElapsedTime());
  };

  /**
   * Trigger on active.
   */
  const onActive = () => {
    console.log("onActive: Timer reset.");
    idleTimer.reset();
  };

  // const onAction = () => {
  //   console.log("onAction: Timer reset.");
  //   idleTimer.resume();
  // };

  // let onAction = _onAction(currentUser, curActiveState, setCurActiveState);
  // let onActive = _onActive(currentUser, curActiveState, setCurActiveState);

  return (
    <IdleTimer
      ref={(ref) => {
        idleTimer = ref;
      }}
      element={document}
      onActive={onActive}
      onIdle={onIdle}
      // onAction={onAction}
      debounce={250}
      timeout={timeout}
      // stopOnIdle={true}
    />
  );
};

/**
 * POST user usage to API
 * @param {string} nric
 * @param {string} pathname
 */
const updateUsage = (nric, pathname) => {
  let page_idx = getPageIdFromSlug(pathname);
  let sendInfor = {
    nric: nric,
    page_id: String(page_idx),
    duration: String(idleTimer.getElapsedTime()),
  };
  axios
    .post("http://13.67.40.27:3001/api/updateUsage", JSON.stringify(sendInfor))
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
