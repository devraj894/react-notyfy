import React, { useState, useCallback } from "react";
import Notification from "../components/Notification.jsx";
import { v4 as uuidv4 } from "uuid";

// Hook to manage notifications
const useNotification = (position = "bottom-right") => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = useCallback((notificationProps) => {
    const toastId = uuidv4();
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id: toastId, ...notificationProps },
    ]);

    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((n) => n.id !== toastId)
      );
    }, notificationProps.duration);
  }, []);

  const handleNotificationClose = (index) => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = [...prevNotifications];
      updatedNotifications.splice(index, 1);
      return updatedNotifications;
    });
  };

  const NotificationComponent = (
    <div
      className={`notification-container ${position} ${position.split("-")[0]}`}
    >
      {notifications.map((notification, index) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => handleNotificationClose(index)}
        />
      ))}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
