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
import htmlText from "../utils/htmlText";
import { useState } from "react";

function AMLAndRegulations() {
  const [separateAMLPolicy, setSeparateAMLPolicy] = useState("");
  const [policyProvided, setPolicyProvided] = useState("");
  const [periodicReview, setPeriodicReview] = useState("");
  const [license, setLicense] = useState("");
  const [otherLicense, setOtherLicense] = useState("");
  const [reportingObligation, setReportingObligation] = useState("");

  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();
  return (
    <>
      <GrayBackgroundText text="Anti-Money Laundering & Regulation" />
      <div className="my-4 flex flex-col row-y-4">
        {/* 1 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            1. Does the correspondent have a separate AML policy in place for
            the Mobile Wallet?
          </FormLabel>

          <Controller
            name="separateAMLPolicy"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <RadioGroup
                  onChange={(event) => setSeparateAMLPolicy(event.target.value)}
                  label="1. Does the correspondent have a separate AML policy in place for the Mobile Wallet?"
                  {...field}
                  error={Boolean(errors?.separateAMLPolicy)}
                  onBlur={() => trigger("separateAMLPolicy")}
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

                {errors?.separateAMLPolicy?.message && (
                  <FormHelperText error={Boolean(errors?.separateAMLPolicy)}>
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
            If <span className="font-semibold">Yes</span>, has the Correspondent
            provided the policy?
          </FormLabel>

          <Controller
            name="policyProvided"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <RadioGroup
                  onChange={(event) => setPolicyProvided(event.target.value)}
                  label="If Yes, has the Correspondent provided the policy?"
                  {...field}
                  error={Boolean(errors?.policyProvided)}
                  onBlur={() => trigger("policyProvided")}
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

                {errors?.policyProvided?.message && (
                  <FormHelperText error={Boolean(errors?.policyProvided)}>
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
            2. Does the correspondent conduct a periodic review of the Mobile
            Wallet&apos;s AML policy?
          </FormLabel>

          <Controller
            name="periodicReview"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <RadioGroup
                  onChange={(event) => setPeriodicReview(event.target.value)}
                  label="Does the correspondent conduct a periodic review of the Mobile Wallet's AML policy?"
                  {...field}
                  error={Boolean(errors?.periodicReview)}
                  onBlur={() => trigger("periodicReview")}
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

                {errors?.periodicReview?.message && (
                  <FormHelperText error={Boolean(errors?.periodicReview)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 4 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>
            If <span className="font-semibold">Yes</span>, please indicate how
            often:
          </FormLabel>

          <Controller
            name="howOften"
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
                  error={Boolean(errors?.howOften)}
                  onBlur={() => trigger("howOften")}
                />

                {errors?.howOften?.message && (
                  <FormHelperText error={Boolean(errors?.howOften)}>
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
            3. Does the Correspondent&apos;s license allow to operate to conduct
            transactions using the Mobile Wallet?
          </FormLabel>

          <Controller
            name="license"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <RadioGroup
                  onChange={(event) => setLicense(event.target.value)}
                  label="Does the Correspondent's license allow to operate to conduct transactions using the Mobile Wallet?"
                  {...field}
                  error={Boolean(errors?.license)}
                  onBlur={() => trigger("license")}
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

                {errors?.license?.message && (
                  <FormHelperText error={Boolean(errors?.license)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 6 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>Please specify the type of license:</FormLabel>

          <Controller
            name="licenseType"
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
                  error={Boolean(errors?.licenseType)}
                  onBlur={() => trigger("licenseType")}
                />
                {errors?.licenseType?.message && (
                  <FormHelperText error={Boolean(errors?.licenseType)}>
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
            4. Does the Correspondent have any other license for providing
            financial services/ other Money transfer services?
          </FormLabel>

          <Controller
            name="otherLicense"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <RadioGroup
                  onChange={(event) => setOtherLicense(event.target.value)}
                  label="Does the Correspondent have any other license for providing financial services/ other Money transfer services?"
                  {...field}
                  error={Boolean(errors?.otherLicense)}
                  onBlur={() => trigger("otherLicense")}
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

                {errors?.otherLicense?.message && (
                  <FormHelperText error={Boolean(errors?.otherLicense)}>
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
            If <span className="font-semibold">Yes</span>, please specify:
          </FormLabel>
          <Controller
            name="otherLicenseType"
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
                  error={Boolean(errors?.otherLicenseType)}
                  onBlur={() => trigger("otherLicenseType")}
                />
                {errors?.otherLicenseType?.message && (
                  <FormHelperText error={Boolean(errors?.otherLicenseType)}>
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
            5. Does the Correspondent have specific AML reporting obligations or
            regulatory requirements for Mobile Wallet?
          </FormLabel>

          <Controller
            name="reportingObligation"
            control={control}
            defaultValue="Yes"
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field }) => (
              <>
                <RadioGroup
                  onChange={(event) =>
                    setReportingObligation(event.target.value)
                  }
                  label="Does the Correspondent have any other license for providing financial services/ other Money transfer services?"
                  {...field}
                  error={Boolean(errors?.reportingObligation)}
                  onBlur={() => trigger("reportingObligation")}
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

                {errors?.reportingObligation?.message && (
                  <FormHelperText error={Boolean(errors?.reportingObligation)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>

        {/* 10 */}
        <FormControl fullWidth size="small" required id="outlined-helperText">
          <FormLabel>Please describe the requirements below:</FormLabel>
          <Controller
            name="reportingObligationRequirement"
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
                  error={Boolean(errors?.reportingObligationRequirement)}
                  onBlur={() => trigger("reportingObligationRequirement")}
                />
                {errors?.reportingObligationRequirement?.message && (
                  <FormHelperText
                    error={Boolean(errors?.reportingObligationRequirement)}
                  >
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

export default AMLAndRegulations;
