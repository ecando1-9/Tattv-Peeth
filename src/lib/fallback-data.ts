import { LOGO_URL } from "./constants";
import type { BlogPost, DonationStats, GalleryImage, Testimonial, TimelinePhase } from "./types";

export const donationStats: DonationStats = {
  amountRaised: 2300000,
  targetAmount: 10000000,
  totalSupporters: 84,
};

export const pillars = [
  {
    dev: "शास्त्र",
    title: "Śāstra",
    label: "Scriptural Wisdom",
    description: "Veda and Upaniṣad, Saṃskṛta as a living tongue, darśana, Itihāsa-Purāṇa — alongside mathematics, science, and technology, the Bhāratīya contribution to each restored to its place.",
    image: "/shastra.png",
  },
  {
    dev: "साधना",
    title: "Sādhanā",
    label: "Inner Discipline",
    description: "Daily sandhyā, yoga, prāṇāyāma, havan, and meditation — the keel of the day, kept by the ācāryas before it is ever asked of the vidyārthīs.",
    image: "/sadhana.png",
  },
  {
    dev: "सेवा",
    title: "Sevā",
    label: "Service",
    description: "Go-sevā, work in the field, care of guests, service to the surrounding villages, and Gaṅgā-sevā at the Kārtika melā — niṣkāma karma, a lived relationship with the land.",
    image: "/seva.png",
  },
  {
    dev: "संस्कार",
    title: "Saṃskāra",
    label: "Character",
    description: "Conduct, respect, self-reliance, and cultural rootedness - formed not by lecture but woven into the daily rhythm of residential gurukula life.",
    image: "/samskara.png",
  },
];

export const timelinePhases: TimelinePhase[] = [
  {
    id: "phase-1",
    phase_number: 1,
    title: "Land Preparation",
    subtitle: "Establishing the physical and legal foundation of the campus",
    period: "2024 - 2025",
    status: "active",
    description: "Boundary demarcation, land levelling, soil preparation, water access, and the first campus pathways prepare the ground for a living Gurukul.",
    items: ["Legal consolidation", "Boundary wall", "Land levelling", "Water access", "Entry gate"],
    image_url: "/phase1.png",
  },
  {
    id: "phase-2",
    phase_number: 2,
    title: "Infrastructure Development",
    subtitle: "Creating residential and academic spaces",
    period: "2025 - 2026",
    status: "active",
    description: "Core construction begins with teaching spaces, residential quarters, dining facilities, and a yoga and meditation hall.",
    items: ["Classrooms", "Dormitories", "Kitchen", "Meditation hall", "Faculty housing"],
    image_url: "/phase2.png",
  },
  {
    id: "phase-3",
    phase_number: 3,
    title: "Agriculture & Sustainability",
    subtitle: "Building the food and ecological systems",
    period: "2026 - 2027",
    status: "upcoming",
    description: "Organic orchards, agroforestry, medicinal gardens, composting, and rainwater harvesting make the campus self-sustaining.",
    items: ["Organic farming", "Agroforestry", "Herbal garden", "Composting", "Rainwater harvesting"],
    image_url: "/phase3.png",
  },
  {
    id: "phase-4",
    phase_number: 4,
    title: "Academic Launch",
    subtitle: "Welcoming the founding cohort",
    period: "2027 - 2028",
    status: "planned",
    description: "The first students enter a curriculum aligned with NEP 2020, Indian Knowledge Systems, and contemporary academics.",
    items: ["Admissions", "Faculty appointments", "Curriculum finalisation", "CBSE process", "Parent engagement"],
    image_url: "/phase4.png",
  },
  {
    id: "phase-5",
    phase_number: 5,
    title: "Community Expansion",
    subtitle: "Serving the wider region",
    period: "2028 onwards",
    status: "planned",
    description: "Open programs, research partnerships, rural skills training, and community wellness initiatives extend the Gurukul's reach.",
    items: ["Open programs", "Research", "Rural skills", "Annual gathering", "Alumni network"],
    image_url: "/phase5.png",
  },
];

export const galleryImages: GalleryImage[] = [];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Founding Supporter",
    role: "Delhi NCR",
    quote: "Tattv Peeth brings education back into relationship with land, discipline, service, and inner growth.",
  },
  {
    id: "t2",
    name: "Community Advisor",
    role: "Garh Mukteshwar",
    quote: "The vision is rooted, practical, and deeply needed for families seeking values-led education.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Why a Gurukul for a New Generation?",
    slug: "why-a-gurukul-for-a-new-generation",
    excerpt: "A modern Gurukul can unite Indian Knowledge Systems, contemporary academics, ecological life, and service.",
    content: "Tattv Peeth is imagined as a living institution where learning and living are inseparable. The campus rhythm brings together study, yoga, farming, craft, and service so students grow with clarity, strength, and humility.",
    category: "Education",
    featured: true,
    cover_image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80",
    published_at: "2026-06-06",
  },
  {
    id: "b2",
    title: "The Five Phases of Development",
    slug: "five-phases-of-development",
    excerpt: "A deliberate roadmap from prepared land to a full residential and community institution.",
    content: "The development plan begins with the land, moves into infrastructure and sustainability, and culminates in academic launch and community programs.",
    category: "Development",
    featured: false,
    cover_image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    published_at: "2026-06-07",
  },
];
