import { useFormContext } from "react-hook-form";

import { Divider, Grid, Stack } from "@mui/material";

const GenInfoSection = () => {
  const { getValues } = useFormContext();
  return (
    <>
      <Divider textAlign="left">GENERAL INFORMATION</Divider>

      <div className="my-8 px-8 pb-4 bg-grey-1">
        <Grid container spacing={2}>
          <Grid xs={6} item marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Connectivity
              </h3>
              <span className="italic">{getValues().connectivity}</span>
            </Stack>
          </Grid>

          <Grid xs={6} item marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Mobile Wallet Service
              </h3>
              <span className="italic">{getValues().mobileWalletService}</span>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="8px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-medium">
                <span className="font-bold">Service Accessibility: </span>Will
                the customer be able to perform the transaction at a physical
                location as well?
              </h3>
              <span className="italic">{getValues().serviceAccessibility}</span>
            </Stack>
          </Grid>

          <Grid xs={12} marginBlock="8px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-medium">
                <span className="font-bold">Service Territory: </span>Mobile
                Wallet can be used by correspondent’s customer: only in the
                correspondent’s registered country or also outside it? Can the
                customer initiate a transaction while out of the territory?
              </h3>
              <span className="italic">{getValues().serviceTerritory}</span>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default GenInfoSection;
