import {
  AMLAndRegulations,
  GeneralInfo,
  KYCProcedures,
  MobileWallet,
  Monitoring,
} from "../components";

export const steppersArray = [
  {
    id: 1,
    name: "General Information",
    heading: "General Information",
    component: <GeneralInfo />,
  },
  {
    id: 2,
    name: "Anti-Money Laundering & Regulation",
    heading: "Anti-Money Laundering & Regulation",
    component: <AMLAndRegulations />,
  },
  {
    id: 3,
    name: "KYC Procedures",
    heading: "KYC Procedures",
    component: <KYCProcedures />,
  },
  {
    id: 4,
    name: "Mobile Wallet Characteristics",
    heading: "Mobile Wallet Characteristics",
    component: <MobileWallet />,
  },
  {
    id: 5,
    name: "Monitoring",
    heading: "Monitoring",
    component: <Monitoring />,
  },
];
