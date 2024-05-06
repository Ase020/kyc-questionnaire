import { Checkbox, FormControl, FormLabel, TextField } from "@mui/material";
import GrayBackgroundText from "./GrayBackgroundText";
import { Controller, useFormContext } from "react-hook-form";

function Signature() {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <>
      <GrayBackgroundText text="Authorization" />
      <div className="mt-1 mb-4 flex flex-col row-y-6">
        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>Name and Title of the signatory</FormLabel>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
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

        <FormControl
          fullWidth
          size="small"
          id="outlined-helperText"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Controller
            name="acknowledgement"
            control={control}
            defaultValue="Yes"
            render={({ field }) => <Checkbox {...field} />}
          />

          <FormLabel>
            I acknowledge that the information herein is accurate and true
          </FormLabel>
        </FormControl>
      </div>
    </>
  );
}

export default Signature;
