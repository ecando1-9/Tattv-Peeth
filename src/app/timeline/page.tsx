import type { Metadata } from "next";
import { TimelineSection } from "@/components/timeline-section";
import { getTimelinePhases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Development Timeline",
  description: "Five-phase development timeline for Tattv Peeth Gurukul.",
};

export default async function TimelinePage() {
  const phases = await getTimelinePhases();
  return <TimelineSection phases={phases} />;
}
