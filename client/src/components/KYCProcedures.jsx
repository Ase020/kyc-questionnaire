import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import GrayBackgroundText from "./GrayBackgroundText";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import htmlText from "../utils/htmlText";
import OrangeBackgroundText from "./OrangeBackgroundText";

function KYCProcedures() {
  const [customerRegistered, setCustomerRegistered] = useState("");
  const [customerKYC, setCustomerKYC] = useState("");
  const [online, setOnline] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [dueDilligence, setDueDilligence] = useState("");
  const [dueDilligenceDesc, setDueDilligenceDesc] = useState("");

  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <>
      <GrayBackgroundText text="KYC Procedures" />
      <div className="mt-1 mb-4 flex flex-col row-y-6">
        <OrangeBackgroundText text="KYC for Customers" />
        {/* 1 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            1. Does the customer need to be registered to use Mobile Wallet?
          </FormLabel>

          <Controller
            name="customerRegistered"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <RadioGroup
                  onChange={(event) =>
                    setCustomerRegistered(event.target.value)
                  }
                  label="Does the customer need to be registered to use Mobile Wallet?"
                  {...field}
                  error={Boolean(errors?.customerRegistered)}
                  onBlur={() => trigger("customerRegistered")}
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

                {errors?.customerRegistered?.message && (
                  <FormHelperText error={Boolean(errors?.customerRegistered)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 2 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Not</span>, explain when will the
            Customer KYC be performed:
          </FormLabel>
          <Controller
            name="performKYC"
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
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.performKYC)}
                  onBlur={() => trigger("performKYC")}
                />
                {errors?.performKYC?.message && (
                  <FormHelperText error={Boolean(errors?.performKYC)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 3 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            2. Please describe the KYC process in place and provide the list of
            documents required to register a customer:
          </FormLabel>
          <Controller
            name="kYCDescription"
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
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.kYCDescription)}
                  onBlur={() => trigger("kYCDescription")}
                />
                {errors?.kYCDescription?.message && (
                  <FormHelperText error={Boolean(errors?.kYCDescription)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 4 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>3. Can a customer open an account online?</FormLabel>

          <Controller
            name="online"
            control={control}
            defaultValue="No"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setOnline(event.target.value)}
                  label="Can a customer open an account online?"
                  {...field}
                  error={Boolean(errors?.online)}
                  onBlur={() => trigger("online")}
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

                {errors?.online?.message && (
                  <FormHelperText error={Boolean(errors?.online)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 5 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, describe the due
            diligence process in place:
          </FormLabel>
          <Controller
            name="dueDiligence"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.dueDiligence)}
                  onBlur={() => trigger("dueDiligence")}
                />
                {errors?.dueDiligence?.message && (
                  <FormHelperText error={Boolean(errors?.dueDiligence)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 6 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            4. Indicate what type of customers are allowed to open an account:
          </FormLabel>

          <Controller
            name="customerType"
            control={control}
            defaultValue="Both"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setCustomerType(event.target.value)}
                  label="Does the customer need to be registered to use Mobile Wallet?"
                  {...field}
                  error={Boolean(errors?.customerType)}
                  onBlur={() => trigger("customerType")}
                >
                  <div className="flex gap-4">
                    <FormControlLabel
                      value="Local"
                      control={<Radio />}
                      label="Local"
                    />
                    <FormControlLabel
                      value="Foreign"
                      control={<Radio />}
                      label="Foreign"
                    />
                    <FormControlLabel
                      value="Both"
                      control={<Radio />}
                      label="Both"
                    />
                  </div>
                </RadioGroup>

                {errors?.customerType?.message && (
                  <FormHelperText error={Boolean(errors?.customerType)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 7 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            5. Does the Correspondent have any Enhanced Due Dilligence for High
            Risk customer?
          </FormLabel>

          <Controller
            name="dueDilligence"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setDueDilligence(event.target.value)}
                  {...field}
                  error={Boolean(errors?.dueDilligence)}
                  onBlur={() => trigger("dueDilligence")}
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

                {errors?.dueDilligence?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligence)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 8 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, describe the enhanced
            due dilligence process in place:
          </FormLabel>
          <Controller
            name="dueDilligenceDesc"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.dueDilligenceDesc)}
                  onBlur={() => trigger("dueDilligenceDesc")}
                />
                {errors?.dueDilligenceDesc?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligenceDesc)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 9 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            6. Are new customers screened against sanction list?
          </FormLabel>

          <Controller
            name="dueDilligence"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setDueDilligence(event.target.value)}
                  {...field}
                  error={Boolean(errors?.dueDilligence)}
                  onBlur={() => trigger("dueDilligence")}
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

                {errors?.dueDilligence?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligence)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 10 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, <br />
            a) indicate against which lists are customers screened:
          </FormLabel>
          <Controller
            name="dueDilligenceDesc"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.dueDilligenceDesc)}
                  onBlur={() => trigger("dueDilligenceDesc")}
                />
                {errors?.dueDilligenceDesc?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligenceDesc)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 11 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            b) what is the procedure in case of a possible hit?
          </FormLabel>
          <Controller
            name="dueDilligenceDesc"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.dueDilligenceDesc)}
                  onBlur={() => trigger("dueDilligenceDesc")}
                />
                {errors?.dueDilligenceDesc?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligenceDesc)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 12 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>7. Is the KYC process linked to a bank account?</FormLabel>

          <Controller
            name="dueDilligence"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setDueDilligence(event.target.value)}
                  {...field}
                  error={Boolean(errors?.dueDilligence)}
                  onBlur={() => trigger("dueDilligence")}
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

                {errors?.dueDilligence?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligence)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 13 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, please specify:
          </FormLabel>
          <Controller
            name="dueDilligenceDesc"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.dueDilligenceDesc)}
                  onBlur={() => trigger("dueDilligenceDesc")}
                />
                {errors?.dueDilligenceDesc?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligenceDesc)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>
      </div>

      <div className="mt-1 mb-4 flex flex-col row-y-6">
        <OrangeBackgroundText text="KYC for Beneficiaries" />
        {/* 14 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            1. Does the beneficiary need to be registered to receive the
            transaction?
          </FormLabel>

          <Controller
            name="dueDilligence"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setDueDilligence(event.target.value)}
                  {...field}
                  error={Boolean(errors?.dueDilligence)}
                  onBlur={() => trigger("dueDilligence")}
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

                {errors?.dueDilligence?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligence)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 15 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, describe the
            registration process:
          </FormLabel>
          <Controller
            name="dueDilligenceDesc"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.dueDilligenceDesc)}
                  onBlur={() => trigger("dueDilligenceDesc")}
                />
                {errors?.dueDilligenceDesc?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligenceDesc)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 16 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            2. Are new beneficiaries screened against the sanction list?
          </FormLabel>

          <Controller
            name="dueDilligence"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <RadioGroup
                  onChange={(event) => setDueDilligence(event.target.value)}
                  {...field}
                  error={Boolean(errors?.dueDilligence)}
                  onBlur={() => trigger("dueDilligence")}
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

                {errors?.dueDilligence?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligence)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 17 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, indicate against
            which lists are customers screened:
          </FormLabel>
          <Controller
            name="dueDilligenceDesc"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  id="outlined-helperText"
                  required
                  multiline
                  fullWidth
                  margin="normal"
                  size="small"
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.dueDilligenceDesc)}
                  onBlur={() => trigger("dueDilligenceDesc")}
                />
                {errors?.dueDilligenceDesc?.message && (
                  <FormHelperText error={Boolean(errors?.dueDilligenceDesc)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>
      </div>
    </>
  );
}

export default KYCProcedures;
