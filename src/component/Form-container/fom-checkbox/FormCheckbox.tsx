import React, { useState } from "react";

interface IFormCheckbox {
  label: string;
}

const FormCheckbox = (props: IFormCheckbox) => {
    const [checked,setChecked] = useState(false) 
    const handleChecked = () => {
        setChecked(!checked)
    }
  return (
    <label htmlFor="" onClick={handleChecked}>
      <input type="checkbox" checked={checked} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
      >
        <path
          d="M4.97315 9.89757C4.79994 9.89745 4.63211 9.83739 4.49815 9.72757L2.25815 7.89257C1.95186 7.62649 1.9127 7.16507 2.16977 6.85118C2.42684 6.53728 2.88692 6.48473 3.20815 6.73257L4.94315 8.15257L9.94315 3.54757C10.1311 3.32411 10.4316 3.23003 10.7134 3.30644C10.9952 3.38286 11.2071 3.61589 11.2564 3.90368C11.3057 4.19148 11.1835 4.48172 10.9432 4.64757L5.48315 9.69757C5.345 9.82702 5.16248 9.8986 4.97315 9.89757Z"
          fill="#E5E8FA"
        />
      </svg>
      <span>{props.label}</span>
    </label>
  );
};

export default FormCheckbox;
