import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import GrayBackgroundText from "./GrayBackgroundText";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";

function Signature() {
  const [needToRegister, setNeedToRegister] = useState("");

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
            name="needToRegister"
            control={control}
            defaultValue="Yes"
            render={({ field, fieldState }) => <Checkbox {...field} />}
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
