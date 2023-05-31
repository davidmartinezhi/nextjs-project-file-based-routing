import { createContext, useState, useEffect } from "react";

//we get can component out of this code
const NotificationContext = createContext({
  notification: null, // {title, message status}
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

//component that manages all component state
export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();
  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification({
      title: notificationData.title,
      message: notificationData.message,
      status: notificationData.status,
    });
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  //bundle data and functions for distribution
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
