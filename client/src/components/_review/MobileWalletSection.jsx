import { useFormContext } from "react-hook-form";

import { Divider, Grid, Stack } from "@mui/material";

const MobileWalletSection = () => {
  const { getValues } = useFormContext();
  return (
    <>
      <Divider textAlign="left">MOBILE WALLET CHARACTERISTICS</Divider>
      <div className="my-8 px-8 pb-4 bg-grey-1">
        {/* 1 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                1. Please describe the procedure to logging into the Mobile
                wallet in order to send a transaction: (If applicable)
              </h3>
              <span className="italic">{getValues().loginProcedureSend}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 2 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                1. Please describe the procedure to logging into the Mobile
                wallet in order receive a transaction: (If applicable)
              </h3>
              <span className="italic">
                {getValues().loginProcedureReceive}
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 3 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                3. How would the account holder know that the funds have been
                withdrawn from his/her account? (In case of sending)
              </h3>
              <span className="italic">{getValues().fundsWithdrawn}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 4 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                4. How would the account holder know that the funds have been
                deposited to his/her account? (In case of paying)
              </h3>
              <span className="italic">{getValues().fundsDeposited}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 5 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                5.What is the procedure for verifying the
                beneficiary&apos;s/sender Identification is still valid (not
                expired)?
              </h3>
              <span className="italic">{getValues().verifyBeneficiaryId}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 6 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                6. Has the customer an option to print receipt when receive/send
                a transaction with Ria via Mobile Wallet?
              </h3>
              <span className="italic">{getValues().printReceipt}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 7 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                7. Will the Correspondent be able to provide a proof that the
                payment has been desposited to the Mobile Wallet? (In case of
                paying)
              </h3>
              <span className="italic">{getValues().proofOfPayment}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 8 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                8. What are the record retention procedures in place for all
                documents provided? For how long are records retained in the
                system?
              </h3>
              <span className="italic">{getValues().recordRetention}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 9 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                9. How does the Correspondent Verify the validity of the phone
                number? Is there any external/internal source to verify the
                phone number?
              </h3>
              <span className="italic">{getValues().verifyPhoneValidity}</span>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MobileWalletSection;
