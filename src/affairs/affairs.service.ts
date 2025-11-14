import { Injectable } from '@nestjs/common';
import { Affair } from './interfaces/affair.interface';

@Injectable()
export class AffairsService {
  private readonly affairs: Affair[] = [
    {
      id: 1,
      title: 'Global Tech Summit 2025',
      details: 'Annual summit discussing the future of technology.',
      source: 'TechCrunch',
      link: 'https://techcrunch.com',
      summary:
        'Keynotes on AI, quantum computing, and biotech. Major product announcements from industry leaders.',
      type: 'Technological',
    },
    {
      id: 2,
      title: 'International Trade Agreement Signed',
      details: 'A new trade agreement between North America and Europe.',
      source: 'Reuters',
      link: 'https://reuters.com',
      summary:
        'The agreement aims to reduce tariffs on goods and services, boosting economic growth.',
      type: 'Economic',
    },
    {
      id: 3,
      title: 'Social Justice Movement Gains Traction',
      details: 'A widespread movement advocating for social reforms.',
      source: 'Associated Press',
      link: 'https://apnews.com',
      summary:
        'Protests and demonstrations are being held in major cities, calling for policy changes.',
      type: 'Social',
    },
    {
      id: 4,
      title: 'New Environmental Regulations Proposed',
      details:
        'Governments propose stricter regulations to combat climate change.',
      source: 'BBC News',
      link: 'https://bbc.com/news',
      summary:
        'The regulations target carbon emissions from industrial activities and transportation.',
      type: 'Political',
    },
  ];

  findAll(): Affair[] {
    return this.affairs;
  }

  create(affair: Omit<Affair, 'id'>): Affair {
    const newAffair = { ...affair, id: Date.now() };
    this.affairs.push(newAffair);
    return newAffair;
  }

  update(id: number, updatedAffair: Partial<Affair>): Affair | undefined {
    const affairIndex = this.affairs.findIndex((affair) => affair.id === id);
    if (affairIndex > -1) {
      this.affairs[affairIndex] = {
        ...this.affairs[affairIndex],
        ...updatedAffair,
      };
      return this.affairs[affairIndex];
    }
    return undefined;
  }

  remove(id: number): void {
    const affairIndex = this.affairs.findIndex((affair) => affair.id === id);
    if (affairIndex > -1) {
      this.affairs.splice(affairIndex, 1);
    }
  }
}
