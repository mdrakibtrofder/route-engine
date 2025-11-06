import { Injectable } from '@nestjs/common';
import { Profile } from './interfaces/profile.interface';

@Injectable()
export class ProfileService {
  private readonly profile: Profile = {
    basicInfo: {
      name: "Md. Rakib Trofder",
      title: "Associate Software Engineer",
      company: "Streams Tech Ltd.",
      location: "Dhaka, Bangladesh",
      email: "bsse1129@iit.du.ac.bd",
      phone: "+8801939649428",
      github: "rakib3004",
      linkedin: "rakib-iit",
      bio: "Passionate software engineer with expertise in full-stack development, AI/ML research, and system architecture. Always learning and building innovative solutions.",
      status: "Focusing on Software Architecture & AI Research"
    },
    researchProfile: {
      fields: ["Software Engineering", "AI/ML", "Large Language Models", "Software Reconstruction", "System Architecture"],
      publications: [
        {
          title: "Software Reconstruction using Large Language Models",
          venue: "Research Internship - William & Mary",
          year: "2023",
          status: "In Progress"
        }
      ],
      skills: ["Python", "LLMs", "Design Patterns", "Research Methodology", "Data Analysis"],
      ongoingProjects: ["Software Reconstruction Tool", "AI-Powered Code Analysis"]
    },
    developerProfile: {
      techStack: {
        languages: ["C++", "Java", "Python", "C#", "JavaScript", "TypeScript"],
        frameworks: ["React", "Angular", "ASP.NET", "Node.js", "Nest.js"],
        technologies: ["Git", "Docker", "Nginx", "PostgreSQL", "Redis", "AWS"],
        tools: ["GitHub", "GitHub Actions", "Postman", "Linux", "Figma"]
      },
      projects: [
        {
          title: "Vaccine Management System",
          description: "Scalable web application with AWS infrastructure",
          tech: ["React", "Node.js", "AWS", "PostgreSQL"],
          status: "Completed"
        },
        {
          title: "Software Reconstruction Tool",
          description: "AI-powered tool for automated software maintenance",
          tech: ["React", "Nest.js", "Python", "LLMs"],
          status: "In Development"
        }
      ],
      experience: "2+ years in software development"
    },
    businessProfile: {
      competencies: ["Project Management", "Team Leadership", "System Design", "Process Optimization"],
      ventures: [
        {
          title: "Somoyon DU Official Website",
          role: "Technical Lead",
          description: "Portfolio website for university association",
          impact: "Improved digital presence and community engagement"
        }
      ],
      metrics: [
        { label: "Projects Led", value: "5+" },
        { label: "Team Size", value: "3-8 people" },
        { label: "Success Rate", value: "98%" }
      ]
    },
    writerProfile: {
      topics: ["Technology", "Software Development", "AI/ML", "System Architecture"],
      works: [
        {
          title: "Technical Documentation - Vaccine Management System",
          type: "Documentation",
          year: "2024"
        }
      ],
      writingGoals: {
        articles: { current: 2, target: 12, progress: 17 },
        documentation: { current: 5, target: 10, progress: 50 }
      }
    },
    islamicStudiesProfile: {
      studyAreas: ["Quran Studies", "Hadith Sciences", "Islamic Jurisprudence", "Islamic History", "Arabic Language"],
      currentStudies: [
        {
          title: "Tafseer Ibn Kathir",
          progress: 35,
          instructor: "Local Islamic Scholar",
          frequency: "Weekly Sessions"
        },
        {
          title: "Hadith Authentication Course",
          progress: 68,
          instructor: "Online Islamic University",
          frequency: "Self-paced"
        }
      ],
      memorization: {
        quranSurahs: { completed: 15, inProgress: 3, target: 30 },
        duas: { completed: 25, inProgress: 5, target: 50 }
      },
      activities: [
        "Weekly Quran Study Circle",
        "Monthly Islamic History Discussion",
        "Community Dawah Activities"
      ]
    },
    socialResponsibilityProfile: {
      focusAreas: ["Education", "Environmental Conservation", "Community Development", "Poverty Alleviation"],
      currentProjects: [
        {
          title: "Free Coding Bootcamp for Underprivileged Youth",
          role: "Technical Instructor",
          impact: "Trained 50+ students",
          status: "Ongoing"
        },
        {
          title: "Community Clean-up Initiative",
          role: "Organizer", 
          impact: "Cleaned 15 local areas",
          status: "Monthly Events"
        }
      ],
      volunteerHours: {
        thisYear: 120,
        lifetime: 450,
        target: 150
      },
      skills: ["Teaching", "Project Management", "Community Organizing", "Environmental Awareness"],
      achievements: [
        "Best Volunteer Award 2023",
        "Community Impact Recognition",
        "Youth Mentorship Certificate"
      ]
    }
  };

  getProfile(): Profile {
    return this.profile;
  }
}
