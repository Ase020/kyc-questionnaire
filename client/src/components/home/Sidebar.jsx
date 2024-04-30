/* eslint-disable react/prop-types */
import {
  Check,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@mui/icons-material";

import { steppersArray } from "../../constants";

function Sidebar({ currentForm }) {
  return (
    <div className="">
      {steppersArray.map((step) => (
        // form-step & form-step-active
        <div className="" key={step.id}>
          {/* step-icon */}
          <div className="">
            {step.id === currentForm ? (
              <RadioButtonChecked fontSize="small" />
            ) : step.id < currentForm ? (
              <Check fontSize="small" />
            ) : (
              <RadioButtonUnchecked fontSize="small" />
            )}
          </div>

          {/* step name */}
          <div className="">{step.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
