import { Divider, Grid, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";

function IntroReview() {
  const { getValues } = useFormContext();
  return (
    <>
      <Divider textAlign="left">ENTITY INFORMATION</Divider>

      <div className="my-8 px-8 pb-4 bg-grey-1">
        <Grid container spacing={2}>
          <Grid xs={6} item marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Name of the Entity
              </h3>
              <span className="italic">{getValues().nameOfEntity}</span>
            </Stack>
          </Grid>

          <Grid xs={6} item marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Trading Name
              </h3>
              <span className="italic">{getValues().tradingName}</span>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={6} item marginBlock="12px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Country of Incorporation
              </h3>
              <span className="italic">
                {getValues().countryOfIncorporation}
              </span>
            </Stack>
          </Grid>

          <Grid xs={6} item marginBlock="12px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Incorporation/Registration number
              </h3>
              <span className="italic">{getValues().dateOfIncorporation}</span>
            </Stack>
          </Grid>

          <Grid xs={6} item marginBlock="12px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Registered address
              </h3>
              <span className="italic">{getValues().address}</span>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default IntroReview;
