/* eslint-disable react/prop-types */
import {
  Check,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@mui/icons-material";

import { steppersArray } from "../../constants";

function Sidebar({ currentForm }) {
  return (
    <div className="main-margin flex items-start flex-col gap-y-6 w-80">
      {steppersArray.map((step) => (
        // form-step & form-step-active
        <div
          className={`font-medium flex items-center gap-2 ${
            step.id && "text-primary-blue"
          } ${
            step.id === currentForm
              ? "text-primary-blue"
              : step.id < currentForm
              ? "text-primary-green"
              : "text-grey-4"
          }`}
          key={step.id}
        >
          {/* step-icon */}
          <div className="">
            {step.id === currentForm ? (
              <RadioButtonChecked
                fontSize="small"
                sx={{
                  width: "16px",
                }}
              />
            ) : step.id < currentForm ? (
              <Check
                fontSize="small"
                sx={{
                  width: "8px",
                }}
              />
            ) : (
              <RadioButtonUnchecked
                fontSize="small"
                sx={{
                  width: "16px",
                }}
              />
            )}
          </div>

          {/* step name */}
          <h3 className="">{step.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
