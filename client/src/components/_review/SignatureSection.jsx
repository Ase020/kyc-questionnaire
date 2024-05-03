import { useFormContext } from "react-hook-form";

import { Divider, Grid, Stack } from "@mui/material";

const SignatureSection = () => {
  const { getValues } = useFormContext();
  return (
    <>
      <Divider textAlign="left">AUTHORIZATION</Divider>
      <div className="my-8 px-8 pb-4 bg-grey-1">
        {/* 1 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Name and Title of the signatory
              </h3>
              <span className="italic">{getValues().name}</span>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SignatureSection;
