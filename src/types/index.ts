export type Language = "en" | "ar";

export interface Project {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  client: string;
  clientAr: string;
  location: string;
  locationAr: string;
  country: "sa" | "kw" | "eg";
  sector: "Residential" | "Healthcare" | "Commercial" | "Cultural" | "Industrial" | "Government" | "Hospitality";
  sectorAr: string;
  scope: string;
  scopeAr: string;
  contractValue?: string;
  duration?: string;
  durationAr?: string;
  year?: string;
  status: "Completed" | "Ongoing";
  statusAr: string;
  featured: boolean;
  coverImage: string;
  galleryImages: string[];
  disciplines: string[];
  disciplinesAr: string[];
  summary: string;
  summaryAr: string;
  description: string;
  descriptionAr: string;
  keyTechnicalFeatures?: string[];
  keyTechnicalFeaturesAr?: string[];
  inheritedFromASA?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  shortDesc: string;
  shortDescAr: string;
  fullDesc: string;
  fullDescAr: string;
  iconName: string;
  coverImage?: string;
  keyCapabilities: string[];
  keyCapabilitiesAr: string[];
  deliverables: string[];
  deliverablesAr: string[];
  standards: string[];
  standardsAr: string[];
  relatedProjectSlugs: string[];
}

export interface Sector {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  keyProjects: string[];
  coreDisciplines: string[];
  coreDisciplinesAr: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  category: "board" | "executive" | "engineering";
  image: string;
  bio: string[];
  bioAr: string[];
  highlights?: string[];
  highlightsAr?: string[];
}

export interface Certificate {
  id: string;
  title: string;
  titleAr: string;
  issuer: string;
  issuerAr: string;
  category: "classification" | "cr" | "tax" | "saudization";
  grade?: string;
  ratingScore?: string;
  certificateNumber: string;
  validUntil: string;
  image: string;
  description: string;
  descriptionAr: string;
}

export interface JobVacancy {
  id: string;
  title: string;
  titleAr: string;
  department: string;
  departmentAr: string;
  location: string;
  locationAr: string;
  type: string;
  typeAr: string;
  experience: string;
  experienceAr: string;
  description: string;
  descriptionAr: string;
  requirements: string[];
  requirementsAr: string[];
  status: "Open" | "Closed";
}

export interface ClientInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceInterest: string;
  projectLocation?: string;
  message: string;
  date: string;
  status: "new" | "reviewed" | "contacted";
}
