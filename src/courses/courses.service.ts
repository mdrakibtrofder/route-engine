import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
  private readonly courses: Course[] = [
    {
      id: 1,
      title: 'Generative AI with Large Language Models',
      provider: 'DeepLearning.AI - Coursera',
      instructor: 'Andrew Ng',
      startDate: '2023-08-01',
      endDate: '2023-12-15',
      progress: 100,
      status: 'completed',
      certificateUrl: '#',
    },
    {
      id: 2,
      title: 'Advanced TypeScript Patterns',
      provider: 'Frontend Masters',
      instructor: 'Mike North',
      startDate: '2024-01-10',
      endDate: '2024-02-15',
      progress: 68,
      status: 'in-progress',
      certificateUrl: null,
    },
    {
      id: 3,
      title: 'AWS Solutions Architecture',
      provider: 'AWS Training',
      instructor: 'AWS Expert',
      startDate: '2024-02-01',
      endDate: '2024-03-30',
      progress: 0,
      status: 'planned',
      certificateUrl: null,
    },
    {
      id: 4,
      title: 'React Advanced Patterns',
      provider: 'Frontend Masters',
      instructor: 'Kent C. Dodds',
      startDate: '2024-03-01',
      endDate: '2024-04-15',
      progress: 25,
      status: 'in-progress',
      certificateUrl: null,
    },
    {
      id: 5,
      title: 'Machine Learning Specialization',
      provider: 'Stanford Online',
      instructor: 'Andrew Ng',
      startDate: '2023-09-15',
      endDate: '2024-01-30',
      progress: 100,
      status: 'completed',
      certificateUrl: '#',
    },
    {
      id: 6,
      title: 'System Design for Developers',
      provider: 'ByteByteGo',
      instructor: 'Alex Xu',
      startDate: '2024-04-01',
      endDate: '2024-06-30',
      progress: 0,
      status: 'planned',
      certificateUrl: null,
    },
    {
      id: 7,
      title: 'Rust Programming Language',
      provider: 'Rust Foundation',
      instructor: 'Steve Klabnik',
      startDate: '2024-02-15',
      endDate: '2024-05-15',
      progress: 45,
      status: 'in-progress',
      certificateUrl: null,
    },
    {
      id: 8,
      title: 'Advanced CSS and Sass',
      provider: 'Udemy',
      instructor: 'Jonas Schmedtmann',
      startDate: '2023-11-01',
      endDate: '2024-01-15',
      progress: 100,
      status: 'completed',
      certificateUrl: '#',
    },
    {
      id: 9,
      title: 'Docker and Kubernetes',
      provider: 'Linux Foundation',
      instructor: 'Kelsey Hightower',
      startDate: '2024-05-01',
      endDate: '2024-07-30',
      progress: 0,
      status: 'planned',
      certificateUrl: null,
    },
    {
      id: 10,
      title: 'Data Structures and Algorithms',
      provider: 'MIT OpenCourseWare',
      instructor: 'Erik Demaine',
      startDate: '2023-10-01',
      endDate: '2023-12-31',
      progress: 100,
      status: 'completed',
      certificateUrl: '#',
    },
  ];

  findAll(): Course[] {
    return this.courses;
  }

  create(course: Omit<Course, 'id'>): Course {
    const newCourse = { ...course, id: Date.now() };
    this.courses.push(newCourse);
    return newCourse;
  }

  update(id: number, updatedCourse: Partial<Course>): Course | undefined {
    const courseIndex = this.courses.findIndex((course) => course.id === id);
    if (courseIndex > -1) {
      this.courses[courseIndex] = { ...this.courses[courseIndex], ...updatedCourse };
      return this.courses[courseIndex];
    }
    return undefined;
  }

  remove(id: number): void {
    const courseIndex = this.courses.findIndex((course) => course.id === id);
    if (courseIndex > -1) {
      this.courses.splice(courseIndex, 1);
    }
  }
}