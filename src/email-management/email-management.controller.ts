import { Controller, Get } from '@nestjs/common';
import { EmailManagementService } from './email-management.service';

@Controller('email-management')
export class EmailManagementController {
  constructor(private readonly emailManagementService: EmailManagementService) {}

  @Get()
  findAll() {
    return this.emailManagementService.findAll();
  }
}
