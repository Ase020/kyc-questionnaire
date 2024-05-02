import {
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

function Monitoring() {
  const [needToRegister, setNeedToRegister] = useState("");

  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <>
      <GrayBackgroundText text="Monitoring" />
      <div className="mt-1 mb-4 flex flex-col row-y-6">
        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            1.Does the Correspondent have any Compliance/watch filters
            specifically established for Mobile Wallet?
          </FormLabel>

          <Controller
            name="needToRegister"
            control={control}
            defaultValue="Yes"
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setNeedToRegister(event.target.value)}
                  {...field}
                  error={Boolean(errors?.needToRegister)}
                  onBlur={() => trigger("needToRegister")}
                >
                  <div className="flex gap-4">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </div>
                </RadioGroup>
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, describe them:
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
            2.Does the Correspondent have amount limits per customer/day/month?
          </FormLabel>

          <Controller
            name="needToRegister"
            control={control}
            defaultValue="Yes"
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setNeedToRegister(event.target.value)}
                  {...field}
                  error={Boolean(errors?.needToRegister)}
                  onBlur={() => trigger("needToRegister")}
                >
                  <div className="flex gap-4">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </div>
                </RadioGroup>
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, please specify the
            limits for payout/sending/both:
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
            3.Are the limits for paying/sending through Mobile Wallet different
            from those for cash transactions?{" "}
            <span className="font-light italic">(If Applicable)</span>
          </FormLabel>

          <Controller
            name="needToRegister"
            control={control}
            defaultValue="Yes"
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setNeedToRegister(event.target.value)}
                  {...field}
                  error={Boolean(errors?.needToRegister)}
                  onBlur={() => trigger("needToRegister")}
                >
                  <div className="flex gap-4">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </div>
                </RadioGroup>
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, please specify:
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
            4.Does the customer have any limitation on number of beneficiaries
            or countries to be sent to?
          </FormLabel>

          <Controller
            name="needToRegister"
            control={control}
            defaultValue="Yes"
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setNeedToRegister(event.target.value)}
                  {...field}
                  error={Boolean(errors?.needToRegister)}
                  onBlur={() => trigger("needToRegister")}
                >
                  <div className="flex gap-4">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </div>
                </RadioGroup>
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, please specify:
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
            5.Does the Correspondent any limitation on the number of Mobile
            Wallet accounts per customer?
          </FormLabel>

          <Controller
            name="needToRegister"
            control={control}
            defaultValue="Yes"
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setNeedToRegister(event.target.value)}
                  {...field}
                  error={Boolean(errors?.needToRegister)}
                  onBlur={() => trigger("needToRegister")}
                >
                  <div className="flex gap-4">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </div>
                </RadioGroup>
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, please specify:
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
            6.Does the Correspondent have a screening process in place?
          </FormLabel>

          <Controller
            name="needToRegister"
            control={control}
            defaultValue="Yes"
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setNeedToRegister(event.target.value)}
                  {...field}
                  error={Boolean(errors?.needToRegister)}
                  onBlur={() => trigger("needToRegister")}
                >
                  <div className="flex gap-4">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </div>
                </RadioGroup>
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, how does the
            correspondent manage any potential matches?{" "}
            <span className="font-light italic">
              (Transaction rejected/On Hold/...)
            </span>
            :
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
            7.Will correspondent run real time verification filters?
          </FormLabel>

          <Controller
            name="needToRegister"
            control={control}
            defaultValue="Yes"
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setNeedToRegister(event.target.value)}
                  {...field}
                  error={Boolean(errors?.needToRegister)}
                  onBlur={() => trigger("needToRegister")}
                >
                  <div className="flex gap-4">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </div>
                </RadioGroup>
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, please specify:
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
            8.Will correspondent perform post-transactional analysis to identify
            suspicious patterns on transactions performed through Mobile Wallet?
          </FormLabel>

          <Controller
            name="needToRegister"
            control={control}
            defaultValue="Yes"
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setNeedToRegister(event.target.value)}
                  {...field}
                  error={Boolean(errors?.needToRegister)}
                  onBlur={() => trigger("needToRegister")}
                >
                  <div className="flex gap-4">
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </div>
                </RadioGroup>
              </>
            )}
          />
        </FormControl>

        <FormControl fullWidth size="small" id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, please specify:
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
            9. What type of monitoring and verification is performed for account
            holders?{" "}
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

export default Monitoring;
