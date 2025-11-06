import { Injectable } from '@nestjs/common';
import { EmailCategory } from './interfaces/email-management.interface';

@Injectable()
export class EmailManagementService {
  private emails: EmailCategory = {
    personal: [
      { email: "rakib11803004@gmail.com", services: [] },
      { email: "mdrakibtrofder@gmail.com", services: [] },
      { email: "bsse1129@gmail.com", services: [] },
      { email: "rjritu5407@gmail.com", services: [] },
    ],
    education: [
      { email: "bsse1129@iit.du.ac.bd", services: [] },
      { email: "mdrakib-11-2018325612@it.du.ac.bd", services: [] },
    ],
    office: [
      { email: "rakib.trofder@cefalo.com", services: [] },
      { email: "rakib.trofder@streamstech.com", services: [] },
    ],
    organizational: [
      { email: "tarafdarinformaticsltd@gmail.com", services: [] },
      { email: "terminals.1444@gmail.com", services: [] },
      { email: "infrastations@gmail.com", services: [] },
      { email: "riresearchlabratory@gmail.com", services: [] },
      { email: "techstoriesdhaka@gmail.com", services: [] },
    ],
  };

  findAll(): EmailCategory {
    return this.emails;
  }

  // Add methods to add/edit/delete services and emails
}
