import { cache } from "react";
import type { BlogPost, DonationStats, GalleryImage, Testimonial, TimelinePhase } from "./types";
import {
  blogPosts,
  donationStats,
  galleryImages,
  testimonials,
  timelinePhases,
} from "./fallback-data";
import { createSupabaseServerClient } from "./supabase/server";

export const getDonationStats = cache(async (): Promise<DonationStats> => {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return donationStats;

  const { data, error } = await supabase
    .from("site_settings")
    .select("key,value")
    .in("key", ["amount_raised", "target_amount", "total_supporters"]);

  if (error || !data?.length) return donationStats;
  const settings = Object.fromEntries(data.map((item) => [item.key, Number(item.value)]));
  return {
    amountRaised: settings.amount_raised || donationStats.amountRaised,
    targetAmount: settings.target_amount || donationStats.targetAmount,
    totalSupporters: settings.total_supporters || donationStats.totalSupporters,
  };
});

export const getTimelinePhases = cache(async (): Promise<TimelinePhase[]> => {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return timelinePhases;
  const { data, error } = await supabase.from("timeline_phases").select("*").order("phase_number");
  return error || !data?.length ? timelinePhases : data;
});

export const getGalleryImages = cache(async (): Promise<GalleryImage[]> => {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return galleryImages;
  const { data, error } = await supabase.from("gallery").select("*").order("created_at", { ascending: false });
  return error || !data?.length ? galleryImages : data;
});

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return testimonials;
  const { data, error } = await supabase.from("testimonials").select("*").eq("published", true).order("created_at");
  return error || !data?.length ? testimonials : data;
});

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return blogPosts;
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });
  return error || !data?.length ? blogPosts : data;
});

export const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return blogPosts.find((post) => post.slug === slug) || null;
  const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).maybeSingle();
  return error ? blogPosts.find((post) => post.slug === slug) || null : data;
});
