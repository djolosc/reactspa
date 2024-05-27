import { throttle } from "lodash";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "./types";

const useHandleScrollAndThrottle = (callBackFunction: () => void) => {
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      // Get the total scrollable height
      const scrollHeight = document.documentElement.scrollHeight;
      // Get the height of the viewport
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 240) {
        callBackFunction();
      }
    }, 400);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callBackFunction]);
};

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(ROUTES.DASHBOARD);
  };

  const navigateToTheList = () => {
    navigate(ROUTES.LIST_OF_ELEMENTS);
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return { navigateHome, navigateToTheList, navigateBack };
};

export { useHandleScrollAndThrottle, useNavigation };
