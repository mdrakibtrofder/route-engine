import { Injectable, NotFoundException } from '@nestjs/common';
import {
  EmailCategory,
  Service,
} from './interfaces/email-management.interface';

@Injectable()
export class EmailManagementService {
  private emails: EmailCategory = {
    personal: [
      { email: 'rakib11803004@gmail.com', services: [] },
      { email: 'mdrakibtrofder@gmail.com', services: [] },
      { email: 'bsse1129@gmail.com', services: [] },
      { email: 'rjritu5407@gmail.com', services: [] },
    ],
    education: [
      { email: 'bsse1129@iit.du.ac.bd', services: [] },
      { email: 'mdrakib-11-2018325612@it.du.ac.bd', services: [] },
    ],
    office: [
      { email: 'rakib.trofder@cefalo.com', services: [] },
      { email: 'rakib.trofder@streamstech.com', services: [] },
    ],
    organizational: [
      { email: 'tarafdarinformaticsltd@gmail.com', services: [] },
      { email: 'terminals.1444@gmail.com', services: [] },
      { email: 'infrastations@gmail.com', services: [] },
      { email: 'riresearchlabratory@gmail.com', services: [] },
      { email: 'techstoriesdhaka@gmail.com', services: [] },
    ],
  };

  findAll(): EmailCategory {
    return this.emails;
  }

  addService(
    category: string,
    email: string,
    service: Omit<Service, 'id'>,
  ): Service {
    const emailCategory = this.emails[category as keyof EmailCategory];
    if (!emailCategory) {
      throw new NotFoundException(`Category ${category} not found`);
    }
    const emailData = emailCategory.find((e) => e.email === email);
    if (!emailData) {
      throw new NotFoundException(
        `Email ${email} not found in category ${category}`,
      );
    }
    const newService = { ...service, id: Date.now().toString() };
    emailData.services.push(newService);
    return newService;
  }

  updateService(
    category: string,
    email: string,
    serviceId: string,
    updatedService: Partial<Service>,
  ): Service {
    const emailCategory = this.emails[category as keyof EmailCategory];
    if (!emailCategory) {
      throw new NotFoundException(`Category ${category} not found`);
    }
    const emailData = emailCategory.find((e) => e.email === email);
    if (!emailData) {
      throw new NotFoundException(
        `Email ${email} not found in category ${category}`,
      );
    }
    const serviceIndex = emailData.services.findIndex(
      (s) => s.id === serviceId,
    );
    if (serviceIndex === -1) {
      throw new NotFoundException(`Service with ID ${serviceId} not found`);
    }
    emailData.services[serviceIndex] = {
      ...emailData.services[serviceIndex],
      ...updatedService,
    };
    return emailData.services[serviceIndex];
  }

  deleteService(category: string, email: string, serviceId: string): void {
    const emailCategory = this.emails[category as keyof EmailCategory];
    if (!emailCategory) {
      throw new NotFoundException(`Category ${category} not found`);
    }
    const emailData = emailCategory.find((e) => e.email === email);
    if (!emailData) {
      throw new NotFoundException(
        `Email ${email} not found in category ${category}`,
      );
    }
    const serviceIndex = emailData.services.findIndex(
      (s) => s.id === serviceId,
    );
    if (serviceIndex === -1) {
      throw new NotFoundException(`Service with ID ${serviceId} not found`);
    }
    emailData.services.splice(serviceIndex, 1);
  }
}
