import { Module } from '@nestjs/common';
import { EmailManagementController } from './email-management.controller';
import { EmailManagementService } from './email-management.service';

@Module({
  controllers: [EmailManagementController],
  providers: [EmailManagementService],
})
export class EmailManagementModule {}
