import { Injectable } from '@nestjs/common';
import { MeetUp } from './interfaces/meetup.interface';

@Injectable()
export class MeetUpsService {
  private readonly meetUps: MeetUp[] = [
    { id: 1, title: "Family Dinner", category: "Family", date: "2024-01-15", time: "18:00", duration: "3 hours", location: "Home", attendees: ["Mom", "Dad", "Sister"], purpose: "Monthly family gathering", photos: 5 },
    { id: 2, title: "Alumni Reunion", category: "University friends", date: "2024-01-20", time: "19:00", duration: "4 hours", location: "Grand Hotel Conference Room", attendees: ["John", "Sarah", "Mike", "Lisa"], purpose: "Catch up on everyone's progress", photos: 12 },
    { id: 3, title: "Community Cleanup", category: "Social responsibility", date: "2024-01-25", time: "08:00", duration: "6 hours", location: "Central Park", attendees: ["Community Volunteers"], purpose: "Environmental cleanup initiative", photos: 8 },
    { id: 4, title: "School Reunion", category: "School friends", date: "2024-02-01", time: "17:00", duration: "5 hours", location: "Local Restaurant", attendees: ["Tom", "Jerry", "Mary", "Peter", "Susan"], purpose: "Annual school friends meetup", photos: 15 },
    { id: 5, title: "Dawah Workshop", category: "Dawah events", date: "2024-02-05", time: "14:00", duration: "3 hours", location: "Islamic Center", attendees: ["Sheikh Ahmed", "Community Members"], purpose: "Islamic knowledge sharing session", photos: 10 },
    { id: 6, title: "Neighborhood BBQ", category: "Neighbors", date: "2024-02-10", time: "12:00", duration: "4 hours", location: "Community Park", attendees: ["Johnson Family", "Smith Family", "Brown Family"], purpose: "Building community bonds", photos: 20 },
    { id: 7, title: "Office Team Building", category: "Colleagues", date: "2024-02-15", time: "09:00", duration: "8 hours", location: "Adventure Park", attendees: ["Marketing Team", "Sales Team"], purpose: "Team bonding activities", photos: 25 },
    { id: 8, title: "Cousin's Wedding", category: "Relatives", date: "2024-02-20", time: "16:00", duration: "6 hours", location: "Grand Ballroom", attendees: ["Extended Family Members"], purpose: "Wedding celebration", photos: 100 },
    { id: 9, title: "Beach Cleanup Drive", category: "Social responsibility", date: "2024-02-25", time: "07:00", duration: "5 hours", location: "City Beach", attendees: ["Environmental Group", "Local Volunteers"], purpose: "Beach cleaning and conservation", photos: 30 },
    { id: 10, title: "Tech Meetup", category: "Ex-colleagues", date: "2024-03-01", time: "18:30", duration: "2.5 hours", location: "Tech Hub", attendees: ["Former Tech Team", "Industry Friends"], purpose: "Technology discussion and networking", photos: 18 }
  ];

  findAll(): MeetUp[] {
    return this.meetUps;
  }

  create(meetUp: Omit<MeetUp, 'id'>): MeetUp {
    const newMeetUp = { ...meetUp, id: Date.now(), photos: 0 };
    this.meetUps.push(newMeetUp);
    return newMeetUp;
  }

  update(id: number, updatedMeetUp: Partial<MeetUp>): MeetUp {
    const meetUpIndex = this.meetUps.findIndex((meetUp) => meetUp.id === id);
    if (meetUpIndex > -1) {
      this.meetUps[meetUpIndex] = { ...this.meetUps[meetUpIndex], ...updatedMeetUp };
      return this.meetUps[meetUpIndex];
    }
    return null;
  }

  remove(id: number): void {
    const meetUpIndex = this.meetUps.findIndex((meetUp) => meetUp.id === id);
    if (meetUpIndex > -1) {
      this.meetUps.splice(meetUpIndex, 1);
    }
  }
}
