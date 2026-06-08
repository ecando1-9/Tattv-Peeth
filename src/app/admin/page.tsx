import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin-dashboard";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Admin"
          title="Foundation content dashboard"
          description="Manage donation statistics, blog posts, gallery items, testimonials, timeline phases, and site settings through Supabase-backed workflows."
        />
        <div className="mt-10">
          <AdminDashboard />
        </div>
      </div>
    </section>
  );
}
