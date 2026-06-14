import type { Metadata } from "next";
import { ContributeHero } from "@/components/contribute/contribute-hero";
import { YajnaOverview } from "@/components/contribute/yajna-overview";
import { CampaignOverall } from "@/components/contribute/campaign-overall";
import { CampaignTabs } from "@/components/contribute/campaign-tabs";
import { LedgerSection } from "@/components/contribute/ledger-section";
import { ContributeHow } from "@/components/contribute/contribute-how";
import { ContributeFaq } from "@/components/contribute/contribute-faq";

export const metadata: Metadata = {
  title: "Campaigns",
  description: "Support Tattv Peeth Gurukul Foundation. The śāstra prescribes five great offerings through which a householder sustains the world. Choose the offering that speaks to you.",
};

export default function ContributePage() {
  return (
    <>
      <ContributeHero />
      <YajnaOverview />
      <CampaignOverall />
      <CampaignTabs />
      <LedgerSection />
      <ContributeHow />
      <ContributeFaq />
    </>
  );
}
