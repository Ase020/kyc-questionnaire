import GrayBackgroundText from "./GrayBackgroundText";
import GenInfoSection from "./_review/GenInfoSection";
import AMLReviewSection from "./_review/AMLReviewSection";
import KYCProceduresSection from "./_review/KYCProceduresSection";
import MobileWalletSection from "./_review/MobileWalletSection";
import MonitoringReview from "./_review/MonitoringReview";
import SignatureSection from "./_review/SignatureSection";
import IntroReview from "./_review/IntroReview";

function Review() {
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
        <IntroReview />
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
