import React, { useContext, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import { getPageIdFromSlug } from "../asset/pages";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export const ActivityTracker = (props) => {
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  const idleTimer = useRef(null);

  const [prevPathname, setPrevPathname] = useState(location.pathname);

  const timeout = 10000;
  const lastActive = useRef(Date.now());
  const getActiveTime = () => Date.now() - lastActive.current - timeout;

  /**
   * Called whenever pathname changes
   */
  useEffect(() => {
    // Only update when prevPathname is different from current pathname
    if (prevPathname !== location.pathname) {
      const activeTime = getActiveTime() + timeout; // Ignore timeout

      updateUsage(currentUser.nric, prevPathname, activeTime);
      console.log(
        `onPageChange: User was active for ${activeTime}ms on ${prevPathname}.`,
        `\nRedirected to ${location.pathname}.`
      );

      // Reset lastActive
      lastActive.current = Date.now();
      setPrevPathname(location.pathname);
    }
  }, [prevPathname, location.pathname, currentUser]);

  /**
   * onIdle callback after more then 5 seconds of idle time.
   */
  const onIdle = () => {
    updateUsage(currentUser.nric, prevPathname, getActiveTime());
    console.log(
      `onIdle: User was active for ${getActiveTime()}ms on ${location.pathname}`
    );
  };

  /**
   * onActive callback when user is active on page.
   */
  const onActive = () => {
    // Reset lastActive
    lastActive.current = Date.now();
    console.log(`onActive: Reset lastActive`);
  };

  return (
    <IdleTimer
      ref={(ref) => {
        idleTimer.current = ref;
      }}
      element={document}
      onActive={onActive}
      onIdle={onIdle}
      debounce={250}
      timeout={timeout}
    />
  );
};

/**
 * POST user usage to API
 * @param {string} nric
 * @param {string} pathname
 * @param {number} elapsedTime
 */
const updateUsage = (nric, pathname, elapsedTime) => {
  let page_idx = getPageIdFromSlug(pathname);
  let sendInfor = {
    nric: nric,
    page_id: String(page_idx),
    duration: String(elapsedTime),
  };

  axios
    .post("http://13.67.40.27:3001/api/updateUsage", JSON.stringify(sendInfor))
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};
