import { Controller, useFormContext } from "react-hook-form";
import GrayBackgroundText from "./GrayBackgroundText";
import { FormControl, FormLabel, TextField } from "@mui/material";

function MobileWallet() {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <>
      <GrayBackgroundText text="Mobile Wallet Characteristics" />
      <div className="mt-1 mb-4 flex flex-col row-y-6">
        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            1.Please describe the procedure to logging into the Mobile wallet in
            order to <span className="font-semibold">send</span> a transaction:
            <span className="font-light italic">(If applicable)</span>
          </FormLabel>
          <Controller
            name="customerKYC"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "24px" }}
                  {...field}
                />
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            2.Please describe the procedure to logging into the Mobile wallet in
            order to <span className="font-semibold">receive</span> a
            transaction:
            <span className="font-light italic">(If applicable)</span>
          </FormLabel>
          <Controller
            name="customerKYC"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "24px" }}
                  {...field}
                />
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            3.How would the account holder know that the funds have been
            withdrawn from his/her account?
            <span className="font-light italic">(In case of sending)</span>
          </FormLabel>
          <Controller
            name="customerKYC"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "24px" }}
                  {...field}
                />
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            4.How would the account holder know that the funds have been
            deposited to his/her account?
            <span className="font-light italic">(In case of sending)</span>
          </FormLabel>
          <Controller
            name="customerKYC"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "24px" }}
                  {...field}
                />
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            5.What is the procedure for verifying the beneficiary&apos;s/sender
            Identification is still valid
            <span className="font-light italic">(not expired)</span>?
          </FormLabel>
          <Controller
            name="customerKYC"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "24px" }}
                  {...field}
                />
              </>
            )}
          />
        </FormControl>
        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            6.Does the customer have an option to print receipt when he/she
            receives/sends a transaction with Ria via Mobile Wallet?
          </FormLabel>
          <Controller
            name="customerKYC"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "24px" }}
                  {...field}
                />
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            7.Will the Correspondent be able to provide a proof that the payment
            has been desposited to the Mobile Wallet?
            <span className="font-light italic">(In case of paying)</span>
          </FormLabel>
          <Controller
            name="customerKYC"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "24px" }}
                  {...field}
                />
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            8.What are the record retention procedures in place for all
            documents provided? For how long are records retained in the system?
          </FormLabel>
          <Controller
            name="customerKYC"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "24px" }}
                  {...field}
                />
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            9.How does the Correspondent Verify the validity of the phone
            number? Is there any external/internal source to verify the phone
            number?
          </FormLabel>
          <Controller
            name="customerKYC"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "24px" }}
                  {...field}
                />
              </>
            )}
          />
        </FormControl>
      </div>
    </>
  );
}

export default MobileWallet;
