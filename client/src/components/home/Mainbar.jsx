/* eslint-disable react/prop-types */
import { KeyboardBackspace } from "@mui/icons-material";
import { FormProvider, useForm } from "react-hook-form";
import { steppersArray } from "../../constants";

function Mainbar({ currentForm, setCurrentForm }) {
  const methods = useForm();

  const handleBack = (e) => {
    e.preventDefault();
    if (currentForm > 0) {
      setCurrentForm((prev) => prev - 1);
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    console.log("Methods: ", methods.getValues());
  };

  const handleContinue = (e) => {
    e.preventDefault();
    methods.trigger();
  };

  return (
    <div className="">
      <h2 className="">{steppersArray[currentForm].heading}</h2>

      {/* form component */}
      <div className="">
        <FormProvider {...methods}>
          <form method="POST" className="">
            {steppersArray[currentForm].component}

            {/* nav buttons */}
            <div className="">
              {currentForm > 0 && (
                <button type="button" onClick={handleBack}>
                  <KeyboardBackspace /> Back
                </button>
              )}

              {currentForm === steppersArray.length - 1 ? (
                <button type="submit" onClick={handleConfirm}>
                  Confirm
                </button>
              ) : (
                <button onClick={handleContinue}>Continue</button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Mainbar;
