export type Role = "admin" | "content_manager" | "donor";

export type DonationStats = {
  amountRaised: number;
  targetAmount: number;
  totalSupporters: number;
};

export type GalleryImage = {
  id: string;
  title: string;
  category: string;
  image_url: string;
  alt?: string | null;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image_url?: string | null;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featured: boolean;
  cover_image?: string | null;
  published_at: string;
};

export type TimelinePhase = {
  id: string;
  phase_number: number;
  title: string;
  subtitle: string;
  period: string;
  status: "active" | "upcoming" | "planned";
  description: string;
  items: string[];
};

export type SiteSetting = {
  key: string;
  value: string;
};
