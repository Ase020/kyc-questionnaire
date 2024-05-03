import { useFormContext } from "react-hook-form";
import GrayBackgroundText from "./GrayBackgroundText";
import { Chip, Divider, Grid, Stack } from "@mui/material";
import GenInfoSection from "./_review/GenInfoSection";
import AMLReviewSection from "./_review/AMLReviewSection";
import KYCProceduresSection from "./_review/KYCProceduresSection";
import MobileWalletSection from "./_review/MobileWalletSection";

function Review() {
  const { getValues } = useFormContext();

  return (
    <div>
      <GrayBackgroundText>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Review</h3>
        </div>
      </GrayBackgroundText>

      <div className="my-4">
        <GenInfoSection />
        <AMLReviewSection />
        <KYCProceduresSection />
        <MobileWalletSection />
      </div>
    </div>
  );
}

export default Review;
