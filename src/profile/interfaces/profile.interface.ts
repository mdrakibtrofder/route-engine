export interface BasicInfo {
  name: string;
  title: string;
  company: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bio: string;
  status: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  status: string;
}

export interface ResearchProfile {
  fields: string[];
  publications: Publication[];
  skills: string[];
  ongoingProjects: string[];
}

export interface TechStack {
  languages: string[];
  frameworks: string[];
  technologies: string[];
  tools: string[];
}

export interface DeveloperProject {
  title: string;
  description: string;
  tech: string[];
  status: string;
}

export interface DeveloperProfile {
  techStack: TechStack;
  projects: DeveloperProject[];
  experience: string;
}

export interface Venture {
  title: string;
  role: string;
  description: string;
  impact: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface BusinessProfile {
  competencies: string[];
  ventures: Venture[];
  metrics: Metric[];
}

export interface WritingWork {
  title: string;
  type: string;
  year: string;
}

export interface WritingGoals {
  articles: { current: number; target: number; progress: number };
  documentation: { current: number; target: number; progress: number };
}

export interface WriterProfile {
  topics: string[];
  works: WritingWork[];
  writingGoals: WritingGoals;
}

export interface Study {
  title: string;
  progress: number;
  instructor: string;
  frequency: string;
}

export interface Memorization {
  quranSurahs: { completed: number; inProgress: number; target: number };
  duas: { completed: number; inProgress: number; target: number };
}

export interface IslamicStudiesProfile {
  studyAreas: string[];
  currentStudies: Study[];
  memorization: Memorization;
  activities: string[];
}

export interface SocialResponsibilityProject {
  title: string;
  role: string;
  impact: string;
  status: string;
}

export interface VolunteerHours {
  thisYear: number;
  lifetime: number;
  target: number;
}

export interface SocialResponsibilityProfile {
  focusAreas: string[];
  currentProjects: SocialResponsibilityProject[];
  volunteerHours: VolunteerHours;
  skills: string[];
  achievements: string[];
}

export interface Profile {
  basicInfo: BasicInfo;
  researchProfile: ResearchProfile;
  developerProfile: DeveloperProfile;
  businessProfile: BusinessProfile;
  writerProfile: WriterProfile;
  islamicStudiesProfile: IslamicStudiesProfile;
  socialResponsibilityProfile: SocialResponsibilityProfile;
}
