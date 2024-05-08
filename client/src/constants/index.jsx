import {
  AMLAndRegulations,
  GeneralInfo,
  Intro,
  KYCProcedures,
  MobileWallet,
  Monitoring,
  Review,
  Signature,
} from "../components";

export const steppersArray = [
  {
    id: 1,
    name: "Introduction",
    heading: "Introduction",
    component: <Intro />,
  },
  {
    id: 2,
    name: "General Information",
    heading: "General Information",
    component: <GeneralInfo />,
  },
  {
    id: 3,
    name: "Anti-Money Laundering & Regulation",
    heading: "Anti-Money Laundering & Regulation",
    component: <AMLAndRegulations />,
  },
  {
    id: 4,
    name: "KYC Procedures",
    heading: "KYC Procedures",
    component: <KYCProcedures />,
  },
  {
    id: 5,
    name: "Mobile Wallet Characteristics",
    heading: "Mobile Wallet Characteristics",
    component: <MobileWallet />,
  },
  {
    id: 6,
    name: "Monitoring",
    heading: "Monitoring",
    component: <Monitoring />,
  },
  {
    id: 7,
    name: "Signature",
    heading: "Authorization",
    component: <Signature />,
  },
  {
    id: 8,
    name: "Review",
    heading: "Review",
    component: <Review />,
  },
];
