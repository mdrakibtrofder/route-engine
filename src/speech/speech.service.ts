import { Injectable } from '@nestjs/common';
import { Speech } from './interfaces/speech.interface';

@Injectable()
export class SpeechService {
  private readonly speeches: Speech[] = [
    {
      id: 1,
      title: "Welcome Address",
      script: "Good morning everyone, welcome to our annual conference...",
      categories: ["Corporate", "Opening"],
      deliveries: [
        { date: "2024-01-15", duration: "10min" },
        { date: "2024-02-01", duration: "12min" }
      ]
    },
    {
      id: 2,
      title: "Product Launch",
      script: "Today marks a revolutionary moment in our industry...",
      categories: ["Marketing", "Product"],
      deliveries: [
        { date: "2024-03-20", duration: "15min" }
      ]
    },
    {
      id: 3,
      title: "Year-End Review",
      script: "As we look back on our achievements this year...",
      categories: ["Corporate", "Review"],
      deliveries: [
        { date: "2023-12-15", duration: "30min" }
      ]
    },
    {
      id: 4,
      title: "Team Building Workshop",
      script: "Building strong teams requires dedication and trust...",
      categories: ["HR", "Training"],
      deliveries: [
        { date: "2024-02-15", duration: "45min" }
      ]
    },
    {
      id: 5,
      title: "Customer Appreciation",
      script: "Our success would not be possible without our valued customers...",
      categories: ["Customer Relations"],
      deliveries: [
        { date: "2024-04-01", duration: "20min" }
      ]
    },
    {
      id: 6,
      title: "Innovation Summit",
      script: "Innovation is the key to staying competitive...",
      categories: ["Technology", "Strategy"],
      deliveries: [
        { date: "2024-05-10", duration: "25min" }
      ]
    },
    {
      id: 7,
      title: "Sustainability Initiative",
      script: "Our commitment to environmental responsibility...",
      categories: ["Environmental", "Corporate"],
      deliveries: [
        { date: "2024-06-05", duration: "18min" }
      ]
    },
    {
      id: 8,
      title: "Employee Recognition",
      script: "Today we celebrate the outstanding achievements...",
      categories: ["HR", "Awards"],
      deliveries: [
        { date: "2024-03-30", duration: "40min" }
      ]
    },
    {
      id: 9,
      title: "Market Analysis",
      script: "Let's examine the current market trends...",
      categories: ["Business", "Analysis"],
      deliveries: [
        { date: "2024-04-15", duration: "35min" }
      ]
    },
    {
      id: 10,
      title: "Safety Protocol Update",
      script: "Safety remains our top priority...",
      categories: ["Safety", "Training"],
      deliveries: [
        { date: "2024-02-28", duration: "22min" }
      ]
    },
    {
      id: 11,
      title: "Quarterly Results",
      script: "I'm pleased to present our Q1 results...",
      categories: ["Financial", "Corporate"],
      deliveries: [
        { date: "2024-04-30", duration: "28min" }
      ]
    },
    {
      id: 12,
      title: "New Office Opening",
      script: "Today we celebrate the opening of our new location...",
      categories: ["Corporate", "Event"],
      deliveries: [
        { date: "2024-07-01", duration: "15min" }
      ]
    }
  ];

  findAll(): Speech[] {
    return this.speeches;
  }

  create(speech: Omit<Speech, 'id'>): Speech {
    const newSpeech = { ...speech, id: Date.now(), deliveries: [] };
    this.speeches.push(newSpeech);
    return newSpeech;
  }

  update(id: number, updatedSpeech: Partial<Speech>): Speech {
    const speechIndex = this.speeches.findIndex((speech) => speech.id === id);
    if (speechIndex > -1) {
      this.speeches[speechIndex] = { ...this.speeches[speechIndex], ...updatedSpeech };
      return this.speeches[speechIndex];
    }
    return null;
  }

  remove(id: number): void {
    const speechIndex = this.speeches.findIndex((speech) => speech.id === id);
    if (speechIndex > -1) {
      this.speeches.splice(speechIndex, 1);
    }
  }
}
