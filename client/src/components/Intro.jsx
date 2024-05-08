import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import GrayBackgroundText from "./GrayBackgroundText";
import { Controller, useFormContext } from "react-hook-form";
import htmlText from "../utils/htmlText";

const Intro = () => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <>
      <GrayBackgroundText text="Entity Information" />

      <div className="mt-1 mb-4 flex flex-col row-y-6">
        {/* 1 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>Full Name of the Entity:</FormLabel>
          <Controller
            name="nameOfEntity"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "16px" }}
                  {...field}
                  error={Boolean(errors?.nameOfEntity)}
                  onBlur={() => trigger("nameOfEntity")}
                />
                {errors?.nameOfEntity?.message && (
                  <FormHelperText error={Boolean(errors?.nameOfEntity)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 2 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>Trading Name:</FormLabel>
          <Controller
            name="tradingName"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: "16px" }}
                  {...field}
                  error={Boolean(errors?.tradingName)}
                  onBlur={() => trigger("tradingName")}
                />
                {errors?.tradingName?.message && (
                  <FormHelperText error={Boolean(errors?.tradingName)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        <Grid container spacing={6}>
          <Grid item xs={6}>
            {/* 3 */}
            <FormControl
              fullWidth
              size="small"
              required
              id="outlined-helperText"
            >
              <FormLabel>Country of Incorporation:</FormLabel>
              <Controller
                name="countryOfIncorporation"
                control={control}
                rules={{ required: htmlText.thisFieldIsRequired }}
                render={({ field }) => (
                  <>
                    <TextField
                      id="outlined-helperText"
                      required
                      multiline
                      fullWidth
                      margin="normal"
                      size="small"
                      sx={{ marginBottom: "16px" }}
                      {...field}
                      error={Boolean(errors?.countryOfIncorporation)}
                      onBlur={() => trigger("countryOfIncorporation")}
                    />
                    {errors?.countryOfIncorporation?.message && (
                      <FormHelperText
                        error={Boolean(errors?.countryOfIncorporation)}
                      >
                        {htmlText.thisFieldIsRequired}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            {/* 4 */}
            <FormControl
              fullWidth
              size="small"
              required
              id="outlined-helperText"
            >
              <FormLabel>Date of Incorporation:</FormLabel>
              <Controller
                name="dateOfIncorporation"
                control={control}
                rules={{ required: htmlText.thisFieldIsRequired }}
                render={({ field }) => (
                  <>
                    <TextField
                      id="outlined-helperText"
                      required
                      multiline
                      fullWidth
                      margin="normal"
                      size="small"
                      sx={{ marginBottom: "16px" }}
                      {...field}
                      error={Boolean(errors?.dateOfIncorporation)}
                      onBlur={() => trigger("dateOfIncorporation")}
                    />
                    {errors?.dateOfIncorporation?.message && (
                      <FormHelperText
                        error={Boolean(errors?.dateOfIncorporation)}
                      >
                        {htmlText.thisFieldIsRequired}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={6}>
            {/* 5 */}
            <FormControl
              fullWidth
              size="small"
              required
              id="outlined-helperText"
            >
              <FormLabel>Incorporation/Registration number:</FormLabel>
              <Controller
                name="incorporationNumber"
                control={control}
                rules={{ required: htmlText.thisFieldIsRequired }}
                render={({ field }) => (
                  <>
                    <TextField
                      id="outlined-helperText"
                      required
                      multiline
                      fullWidth
                      margin="normal"
                      size="small"
                      sx={{ marginBottom: "16px" }}
                      {...field}
                      error={Boolean(errors?.incorporationNumber)}
                      onBlur={() => trigger("incorporationNumber")}
                    />
                    {errors?.incorporationNumber?.message && (
                      <FormHelperText
                        error={Boolean(errors?.incorporationNumber)}
                      >
                        {htmlText.thisFieldIsRequired}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            {/* 6 */}
            <FormControl
              fullWidth
              size="small"
              required
              id="outlined-helperText"
            >
              <FormLabel>Registered address:</FormLabel>
              <Controller
                name="address"
                control={control}
                rules={{ required: htmlText.thisFieldIsRequired }}
                render={({ field }) => (
                  <>
                    <TextField
                      id="outlined-helperText"
                      required
                      multiline
                      fullWidth
                      margin="normal"
                      size="small"
                      sx={{ marginBottom: "16px" }}
                      {...field}
                      error={Boolean(errors?.address)}
                      onBlur={() => trigger("address")}
                    />
                    {errors?.address?.message && (
                      <FormHelperText error={Boolean(errors?.address)}>
                        {htmlText.thisFieldIsRequired}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Intro;
