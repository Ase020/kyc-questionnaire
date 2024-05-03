import { useFormContext } from "react-hook-form";

import GrayBackgroundText from "./GrayBackgroundText";
import GenInfoSection from "./_review/GenInfoSection";
import AMLReviewSection from "./_review/AMLReviewSection";
import KYCProceduresSection from "./_review/KYCProceduresSection";
import MobileWalletSection from "./_review/MobileWalletSection";
import MonitoringReview from "./_review/MonitoringReview";
import SignatureSection from "./_review/SignatureSection";

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
        <MonitoringReview />
        <SignatureSection />
      </div>
    </div>
  );
}

export default Review;
