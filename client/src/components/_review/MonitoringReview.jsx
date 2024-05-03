import { Divider, Grid, Stack } from "@mui/material";

const MonitoringReview = () => {
  return (
    <>
      <Divider textAlign="left">MONITORING</Divider>
      <div className="my-8 px-8 pb-4 bg-grey-1">
        {/* 1 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                1. Does the Correspondent have any Compliance/watch filters
                specifically established for Mobile Wallet?
              </h3>
              <span className="italic">Yes</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, describe them:
              </h3>
              <span className="italic">
                Generally the filters have been set to assess suspicion in large
                transactions (including based on limits), filters based on
                frequency as well as other behavioral patterns.
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 2 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                2. Does the Correspondent have amount limits per
                customer/day/month?
              </h3>
              <span className="italic">Yes</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify the limits for payout/sending/both:
              </h3>
              <span className="italic">
                Transaction limit of Ksh 250,000; Wallet holding limit of Ksh
                500,000
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 3 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                3. Are the limits for paying/sending through Mobile Wallet
                different from those for cash transactions? (If Applicable)
              </h3>
              <span className="italic">Yes</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">
                Generally the filters have been set to assess suspicion in large
                transactions (including based on limits), filters based on
                frequency as well as other behavioral patterns.
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 4 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                4. Does the customer have any limitation on number of
                beneficiaries or countries to be sent to?
              </h3>
              <span className="italic">Yes</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">
                Generally the filters have been set to assess suspicion in large
                transactions (including based on limits), filters based on
                frequency as well as other behavioral patterns.
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 5 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                5. Does the Correspondent any limitation on the number of Mobile
                Wallet accounts per customer?
              </h3>
              <span className="italic">Yes</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">
                Generally the filters have been set to assess suspicion in large
                transactions (including based on limits), filters based on
                frequency as well as other behavioral patterns.
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 6 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                6. Does the Correspondent have a screening process in place?
              </h3>
              <span className="italic">Yes</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, how does the correspondent manage any potential matches?
                (Transaction rejected/On Hold/...):
              </h3>
              <span className="italic">
                Upon the potential match, the transaction is held in pending
                state. The potential match is then reviewed vis-a-vis the
                database records to assess validity. False alerts are released,
                true hits are escalated for Senior Management approval to
                onboard PEPs or RCAs and Sanctioned persons blocked & reported.
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 7 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                7. Will correspondent run real time verification filters?
              </h3>
              <span className="italic">Yes</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">
                Generally the filters have been set to assess suspicion in large
                transactions (including based on limits), filters based on
                frequency as well as other behavioral patterns.
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 8 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                8. Will correspondent perform post-transactional analysis to
                identify suspicious patterns on transactions performed Yes No
                through Mobile Wallet?
              </h3>
              <span className="italic">Yes</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">
                Transaction monitoring is done through the SAS AML monitoring
                system which has thresholds to assess suspicion based on
                pre-defined thresholds including large, frequent or other
                behavioural suspicious patterns including based on limits
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 9 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                9. What type of monitoring and verification is performed for
                account holders?
              </h3>
              <span className="italic">
                Monitoring is as noted under 8 above and verification is as
                noted under &quot;KYC for customers&quot; 5 above.
              </span>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MonitoringReview;
