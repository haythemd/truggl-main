"use client";

import React, { useEffect, useState } from "react";
import Navbtn, { INavbtnProps } from "./Navbtn/Navbtn";

interface NotificationCTAProps extends Omit<INavbtnProps, "className"> {}

const NotificationCTA = ({ children, ...props }: NotificationCTAProps) => {
  const [shouldDisplayNotification, setShouldDisplayNotification] = useState(
    false
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldDisplayNotification(true);
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="notificationCTA">
      <Navbtn {...props}>{children}</Navbtn>
      {shouldDisplayNotification === true && <NotificationBell />}
    </div>
  );
};

const NotificationBell = () => {
  return (
    <span className="notification">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.99915 12C6.97883 12 7.7579 11.5847 7.86243 10.7072C7.8652 10.681 7.8624 10.6544 7.85423 10.6294C7.84605 10.6043 7.83268 10.5812 7.81499 10.5617C7.79729 10.5421 7.77567 10.5265 7.75154 10.5159C7.7274 10.5053 7.7013 10.4999 7.67493 10.5H4.32571C4.29907 10.4998 4.2727 10.5053 4.24835 10.5161C4.224 10.5269 4.20223 10.5427 4.18449 10.5626C4.16675 10.5825 4.15344 10.6059 4.14546 10.6313C4.13748 10.6567 4.13501 10.6836 4.13821 10.71C4.25774 11.5711 5.02977 12 5.99915 12ZM1.4054 9.75H10.5929C11.1479 9.75 11.4366 9.04688 11.1174 8.67188C10.352 7.76531 9.81102 7.38422 9.81102 4.88437C9.81102 2.59359 8.60446 1.78078 7.6079 1.38422C7.53931 1.35564 7.47748 1.31301 7.42638 1.25908C7.37527 1.20515 7.33603 1.14111 7.31118 1.07109C7.13821 0.496875 6.64883 0 5.99915 0C5.34946 0 4.86102 0.496875 4.68665 1.07156C4.66164 1.14157 4.62229 1.20558 4.57111 1.2595C4.51994 1.31342 4.45806 1.35606 4.38946 1.38469C3.39524 1.78031 2.18633 2.59453 2.18633 4.88484C2.18633 7.38469 1.64586 7.76578 0.880395 8.67234C0.564457 9.04688 0.853677 9.75 1.4054 9.75Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

export default NotificationCTA;
