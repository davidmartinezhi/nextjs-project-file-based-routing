import { createContext, useState } from "react";

//we get can component out of this code
const NotificationContext = createContext({
  notification: null, // {title, message status}
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

//component that manages all component state
export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

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
