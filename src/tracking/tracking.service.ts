import { Injectable } from '@nestjs/common';
import { Habit, Skill, Memorization, Objective } from './interfaces/tracking.interface';

@Injectable()
export class TrackingService {
  private habits: Habit[] = [
    {
      id: 1,
      name: "Daily Reading",
      streak: 23,
      target: "30 min/day",
      completion: 85,
      lastActivity: "2024-01-15"
    },
    {
      id: 2,
      name: "Code Practice",
      streak: 12,
      target: "1 hour/day",
      completion: 78,
      lastActivity: "2024-01-15"
    },
    {
      id: 3,
      name: "Exercise",
      streak: 8,
      target: "45 min/day",
      completion: 65,
      lastActivity: "2024-01-14"
    }
  ];

  private skills: Skill[] = [
    {
      id: 1,
      name: "TypeScript",
      level: "Advanced",
      progress: 85,
      hoursLogged: 120,
      recentActivity: "Advanced Patterns Course"
    },
    {
      id: 2,
      name: "System Design",
      level: "Intermediate",
      progress: 65,
      hoursLogged: 45,
      recentActivity: "Microservices Architecture"
    },
    {
      id: 3,
      name: "Machine Learning",
      level: "Beginner",
      progress: 35,
      hoursLogged: 28,
      recentActivity: "LLM Fundamentals"
    }
  ];

  private memorizations: Memorization[] = [
    {
      id: 1,
      type: "Quran Surah",
      title: "Surah Al-Mulk",
      description: "Complete memorization of Surah Al-Mulk (67th chapter)",
      targetDate: "2024-02-15",
      progress: 75,
      versesCompleted: 23,
      totalVerses: 30,
      dailyTarget: "2 verses",
      timeSpent: "45 minutes",
      status: "in-progress"
    },
    {
      id: 2,
      type: "Dua",
      title: "Dua for Protection",
      description: "Morning and evening protection duas",
      targetDate: "2024-01-30",
      progress: 90,
      versesCompleted: 9,
      totalVerses: 10,
      dailyTarget: "Review daily",
      timeSpent: "15 minutes",
      status: "in-progress"
    },
    {
      id: 3,
      type: "Quran Surah", 
      title: "Surah Ar-Rahman",
      description: "Complete memorization of Surah Ar-Rahman (55th chapter)",
      targetDate: "2024-03-20",
      progress: 25,
      versesCompleted: 19,
      totalVerses: 78,
      dailyTarget: "3 verses",
      timeSpent: "60 minutes",
      status: "planning"
    }
  ];

  private objectives: Objective[] = [
    {
      id: 1,
      title: "Launch Personal Blog Platform",
      progress: 75,
      keyResults: [
        { description: "Design and implement UI", progress: 90, status: "completed" },
        { description: "Set up content management", progress: 80, status: "in-progress" },
        { description: "Deploy to production", progress: 60, status: "in-progress" },
        { description: "Write 10 articles", progress: 40, status: "in-progress" }
      ]
    },
    {
      id: 2,
      title: "Complete Advanced TypeScript Mastery",
      progress: 60,
      keyResults: [
        { description: "Finish advanced course", progress: 80, status: "in-progress" },
        { description: "Build 3 TypeScript projects", progress: 67, status: "in-progress" },
        { description: "Contribute to open source", progress: 30, status: "planning" }
      ]
    }
  ];

  findAllHabits(): Habit[] {
    return this.habits;
  }

  createHabit(habit: Omit<Habit, 'id'>): Habit {
    const newHabit = { ...habit, id: Date.now() };
    this.habits.push(newHabit);
    return newHabit;
  }

  updateHabit(id: number, updatedHabit: Partial<Habit>): Habit | undefined {
    const habitIndex = this.habits.findIndex((h) => h.id === id);
    if (habitIndex > -1) {
      this.habits[habitIndex] = { ...this.habits[habitIndex], ...updatedHabit };
      return this.habits[habitIndex];
    }
    return undefined;
  }

  removeHabit(id: number): void {
    const habitIndex = this.habits.findIndex((h) => h.id === id);
    if (habitIndex > -1) {
      this.habits.splice(habitIndex, 1);
    }
  }

  findAllSkills(): Skill[] {
    return this.skills;
  }

  createSkill(skill: Omit<Skill, 'id'>): Skill {
    const newSkill = { ...skill, id: Date.now() };
    this.skills.push(newSkill);
    return newSkill;
  }

  updateSkill(id: number, updatedSkill: Partial<Skill>): Skill | undefined {
    const skillIndex = this.skills.findIndex((s) => s.id === id);
    if (skillIndex > -1) {
      this.skills[skillIndex] = { ...this.skills[skillIndex], ...updatedSkill };
      return this.skills[skillIndex];
    }
    return undefined;
  }

  removeSkill(id: number): void {
    const skillIndex = this.skills.findIndex((s) => s.id === id);
    if (skillIndex > -1) {
      this.skills.splice(skillIndex, 1);
    }
  }

  findAllMemorizations(): Memorization[] {
    return this.memorizations;
  }

  createMemorization(memorization: Omit<Memorization, 'id'>): Memorization {
    const newMemorization = { ...memorization, id: Date.now() };
    this.memorizations.push(newMemorization);
    return newMemorization;
  }

  updateMemorization(id: number, updatedMemorization: Partial<Memorization>): Memorization | undefined {
    const memorizationIndex = this.memorizations.findIndex((m) => m.id === id);
    if (memorizationIndex > -1) {
      this.memorizations[memorizationIndex] = { ...this.memorizations[memorizationIndex], ...updatedMemorization };
      return this.memorizations[memorizationIndex];
    }
    return undefined;
  }

  removeMemorization(id: number): void {
    const memorizationIndex = this.memorizations.findIndex((m) => m.id === id);
    if (memorizationIndex > -1) {
      this.memorizations.splice(memorizationIndex, 1);
    }
  }

  findAllObjectives(): Objective[] {
    return this.objectives;
  }

  createObjective(objective: Omit<Objective, 'id'>): Objective {
    const newObjective = { ...objective, id: Date.now() };
    this.objectives.push(newObjective);
    return newObjective;
  }

  updateObjective(id: number, updatedObjective: Partial<Objective>): Objective | undefined {
    const objectiveIndex = this.objectives.findIndex((o) => o.id === id);
    if (objectiveIndex > -1) {
      this.objectives[objectiveIndex] = { ...this.objectives[objectiveIndex], ...updatedObjective };
      return this.objectives[objectiveIndex];
    }
    return undefined;
  }

  removeObjective(id: number): void {
    const objectiveIndex = this.objectives.findIndex((o) => o.id === id);
    if (objectiveIndex > -1) {
      this.objectives.splice(objectiveIndex, 1);
    }
  }
}
