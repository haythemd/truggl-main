"use client"
import { useState } from "react";

const Switch: React.FC = () => {
    const [isOn, setIsOn] = useState<boolean>(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <button
            onClick={toggleSwitch}
            className={`${
                isOn ? "bg-green-500" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none`}
        >
            else
      <span
          className={`${
              isOn ? "translate-x-5" : "translate-x-0"
          } inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
      >Something</span>
        </button>
    );
};

export default Switch;