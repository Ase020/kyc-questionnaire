/* eslint-disable react/prop-types */
import { KeyboardBackspace } from "@mui/icons-material";
import { FormProvider, useForm } from "react-hook-form";
import { steppersArray } from "../../constants";
import {
  aMLRegulation,
  authorization,
  generalInfoValues,
  kYCProcedures,
  mobileWalletCharacteristics,
  monitoring,
} from "../../utils/selectValues";

function Mainbar({ currentForm, setCurrentForm }) {
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
    // else if (currentForm === 1) {
    //   let flag = true;
    //   for (let i = 0; i < aMLRegulation.length; i++) {
    //     let val = obj[aMLRegulation[i]];
    //     if (!val || val.length < 1) {
    //       flag = false;
    //     }
    //   }

    //   if (!flag) return false;
    // } else if (currentForm === 2) {
    //   let flag = true;
    //   for (let i = 0; i < kYCProcedures.length; i++) {
    //     let val = obj[kYCProcedures[i]];
    //     if (!val || val.length < 1) {
    //       flag = false;
    //     }
    //   }

    //   if (!flag) return false;
    // } else if (currentForm === 3) {
    //   let flag = true;
    //   for (let i = 0; i < mobileWalletCharacteristics.length; i++) {
    //     let val = obj[mobileWalletCharacteristics[i]];
    //     if (!val || val.length < 1) {
    //       flag = false;
    //     }
    //   }

    //   if (!flag) return false;
    // } else if (currentForm === 4) {
    //   let flag = true;
    //   for (let i = 0; i < monitoring.length; i++) {
    //     let val = obj[monitoring[i]];
    //     if (!val || val.length < 1) {
    //       flag = false;
    //     }
    //   }

    //   if (!flag) return false;
    // } else if (currentForm === 5) {
    //   let flag = true;
    //   for (let i = 0; i < authorization.length; i++) {
    //     let val = obj[authorization[i]];
    //     if (!val || val.length < 1) {
    //       flag = false;
    //     }
    //   }

    //   if (!flag) return false;
    // }
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
        setCurrentForm(currentForm + 1);
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
