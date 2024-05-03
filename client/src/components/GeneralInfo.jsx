import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import GrayBackgroundText from "./GrayBackgroundText";
import { Controller, useFormContext } from "react-hook-form";
import htmlText from "../utils/htmlText";
import { useState } from "react";

function GeneralInfo() {
  const [connectivity, setConnectivity] = useState("");
  const [mobileWalletService, setMobileWalletService] = useState("");

  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <div className="my-4 flex flex-col row-y-6">
      <GrayBackgroundText text="General Information" />
      <Grid container spacing={2}>
        {/* connectivity */}
        <Grid item xs={6}>
          <FormControl
            fullWidth
            required
            id="outlined-helperText"
            size="small"
            margin="normal"
          >
            <InputLabel>Connectivity</InputLabel>

            <Controller
              name="connectivity"
              control={control}
              rules={{ required: htmlText.thisFieldIsRequired }}
              render={({ field }) => (
                <>
                  <Select
                    value={connectivity || null}
                    onChange={(event) => setConnectivity(event.target.value)}
                    label="Connectivity"
                    {...field}
                    error={Boolean(errors?.connectivity)}
                    onBlur={() => trigger("connectivity")}
                  >
                    <MenuItem value="FxOnline">FxOnline</MenuItem>
                    <MenuItem value="Web Service">Web Service</MenuItem>
                  </Select>
                  {errors?.connectivity?.message && (
                    <FormHelperText error={Boolean(errors?.connectivity)}>
                      {htmlText.thisFieldIsRequired}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </FormControl>
        </Grid>

        {/* Mobile wallet service */}
        <Grid item xs={6}>
          <FormControl
            fullWidth
            required
            id="outlined-helperText"
            size="small"
            margin="normal"
          >
            <InputLabel>Mobile Wallet Service</InputLabel>

            <Controller
              name="mobileWalletService"
              control={control}
              rules={{ required: htmlText.thisFieldIsRequired }}
              render={({ field }) => (
                <>
                  <Select
                    value={mobileWalletService || null}
                    onChange={(event) =>
                      setMobileWalletService(event.target.value)
                    }
                    label="Mobile Wallet Service"
                    {...field}
                    error={Boolean(errors?.mobileWalletService)}
                    onBlur={() => trigger("mobileWalletService")}
                  >
                    <MenuItem value="Payout">Payout</MenuItem>
                    <MenuItem value="Sending">Sending</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                  </Select>
                  {errors?.mobileWalletService?.message && (
                    <FormHelperText
                      error={Boolean(errors?.mobileWalletService)}
                    >
                      {htmlText.thisFieldIsRequired}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </FormControl>
        </Grid>

        {/* Service Accessibility */}
        <Grid item xs={12}>
          <InputLabel>
            Will the customer be able to perform the transaction at a physical
            location as well?
          </InputLabel>
          <Controller
            name="serviceAccessibility"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <TextField
                  label="Service Accessibility"
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "16px" }}
                  {...field}
                  error={Boolean(errors?.serviceAccessibility)}
                  onBlur={() => trigger("serviceAccessibility")}
                />
                {errors?.serviceAccessibility?.message && (
                  <FormHelperText error={Boolean(errors?.serviceAccessibility)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>

        {/* Service Territory */}
        <Grid item xs={12}>
          <InputLabel
            sx={{
              textWrap: "wrap",
            }}
          >
            Mobile Wallet can be used by correspondent&apos;s customer: only in
            the correspondent&apos;s registered country or also outside it? Can
            the customer initiate a transaction while out of the territory?
          </InputLabel>
          <Controller
            name="serviceTerritory"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <TextField
                  label="Service Territory"
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "16px" }}
                  {...field}
                  error={Boolean(errors?.serviceTerritory)}
                  onBlur={() => trigger("serviceTerritory")}
                />
                {errors?.serviceTerritory?.message && (
                  <FormHelperText error={Boolean(errors?.serviceTerritory)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default GeneralInfo;
