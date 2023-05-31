import { createContext, useState } from "react";

//we get can component out of this code
const NotificationContext = createContext({
  notification: null, // {title, message status}
  showNotification: function () {},
  hideNotification: function () {},
});

//component that manages all component state
export function NotificationContextProvider(props) {
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default notificationContext;
