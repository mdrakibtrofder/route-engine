import { Injectable } from '@nestjs/common';
import { Event } from './interfaces/event.interface';

@Injectable()
export class EventsService {
  private readonly events: Event[] = [
    {
      id: 1,
      title: 'Team Standup Meeting',
      date: '2024-01-15',
      time: '10:00',
      duration: '30 min',
      type: 'meeting',
      location: 'Conference Room A',
      attendees: 5,
    },
    {
      id: 2,
      title: 'TypeScript Advanced Course',
      date: '2024-01-15',
      time: '14:00',
      duration: '2 hours',
      type: 'learning',
      location: 'Online',
      attendees: 1,
    },
    {
      id: 3,
      title: 'Code Review Session',
      date: '2024-01-16',
      time: '16:30',
      duration: '1 hour',
      type: 'work',
      location: 'Development Lab',
      attendees: 3,
    },
    {
      id: 4,
      title: 'Project Planning Workshop',
      date: '2024-01-17',
      time: '09:00',
      duration: '3 hours',
      type: 'meeting',
      location: 'Conference Room B',
      attendees: 8,
    },
    {
      id: 5,
      title: 'React Performance Optimization',
      date: '2024-01-17',
      time: '13:00',
      duration: '1.5 hours',
      type: 'learning',
      location: 'Online',
      attendees: 2,
    },
    {
      id: 6,
      title: 'Client Presentation',
      date: '2024-01-18',
      time: '11:00',
      duration: '1 hour',
      type: 'meeting',
      location: 'Board Room',
      attendees: 6,
    },
    {
      id: 7,
      title: 'Bug Fixing Session',
      date: '2024-01-18',
      time: '15:00',
      duration: '2 hours',
      type: 'work',
      location: 'Development Lab',
      attendees: 4,
    },
    {
      id: 8,
      title: 'Team Building Activity',
      date: '2024-01-19',
      time: '14:00',
      duration: '3 hours',
      type: 'personal',
      location: 'City Park',
      attendees: 12,
    },
    {
      id: 9,
      title: 'Architecture Review',
      date: '2024-01-19',
      time: '10:00',
      duration: '1.5 hours',
      type: 'work',
      location: 'Meeting Room C',
      attendees: 5,
    },
    {
      id: 10,
      title: 'Docker Workshop',
      date: '2024-01-20',
      time: '13:30',
      duration: '2 hours',
      type: 'learning',
      location: 'Training Room',
      attendees: 7,
    },
  ];

  findAll(): Event[] {
    return this.events;
  }

  create(event: Omit<Event, 'id'>): Event {
    const newEvent = { ...event, id: Date.now() };
    this.events.push(newEvent);
    return newEvent;
  }

  update(id: number, updatedEvent: Partial<Event>): Event | undefined {
    const eventIndex = this.events.findIndex((event) => event.id === id);
    if (eventIndex > -1) {
      this.events[eventIndex] = { ...this.events[eventIndex], ...updatedEvent };
      return this.events[eventIndex];
    }
    return undefined;
  }

  remove(id: number): void {
    const eventIndex = this.events.findIndex((event) => event.id === id);
    if (eventIndex > -1) {
      this.events.splice(eventIndex, 1);
    }
  }
}