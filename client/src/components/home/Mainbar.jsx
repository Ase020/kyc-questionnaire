/* eslint-disable react/prop-types */
import { KeyboardBackspace } from "@mui/icons-material";
import { FormProvider, useForm } from "react-hook-form";
import { steppersArray } from "../../constants";

function Mainbar({ currentForm, setCurrentForm }) {
  const generalInfoValues = [
    "connectivity",
    "mobileWalletService",
    "serviceAccessibility",
    "serviceTerritory",
  ];

  const validateForm = (obj) => {
    console.log("Obj: ", obj);

    if (currentForm === 0) {
      let flag = true;
      for (let i = 0; i < generalInfoValues.length; i++) {
        let val = obj[generalInfoValues[i]];
        if (!val || val.length < 1) {
          flag = false;
        }
      }

      if (!flag) return false;
    }
    return true;
  };

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
    const validated = validateForm(methods.getValues());

    if (validated) {
      if (currentForm < steppersArray.length - 1) {
        setCurrentForm((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="main-margin w-full h-[calc(100vh-90px)] overflow-y-scroll">
      <h2 className="h-form-heading-height text-2xl text-blue-289">
        {steppersArray[currentForm].heading}
      </h2>

      {/* form component */}
      <div className="my-main-margin-y w-[70%]">
        <FormProvider {...methods}>
          <form method="POST" className="">
            {steppersArray[currentForm].component}

            {/* nav buttons */}
            <div className="absolute bottom-[3%] right-[3%] flex gap-2 items-center">
              {currentForm > 0 && (
                <button
                  type="button"
                  className="text-grey-4 border-none outline-none py-1.5 px-4 bg-transparent"
                  onClick={handleBack}
                >
                  <KeyboardBackspace /> Back
                </button>
              )}

              {currentForm === steppersArray.length - 1 ? (
                <button
                  type="submit"
                  className="border-none outline-none py-1.5 text-white bg-primary-blue rounded-2xl px-8"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              ) : (
                <button
                  className="border-none outline-none py-1.5 text-white bg-primary-blue rounded-2xl px-8"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Mainbar;
