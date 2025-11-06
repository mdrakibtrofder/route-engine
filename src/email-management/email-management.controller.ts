import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EmailManagementService } from './email-management.service';
import { CreateServiceDto } from './dto/create-email-management.dto';
import { UpdateServiceDto } from './dto/update-email-management.dto';

@Controller('email-management')
export class EmailManagementController {
  constructor(private readonly emailManagementService: EmailManagementService) {}

  @Get()
  findAll() {
    return this.emailManagementService.findAll();
  }

  @Post(':category/:email/services')
  addService(
    @Param('category') category: string,
    @Param('email') email: string,
    @Body() createServiceDto: CreateServiceDto,
  ) {
    return this.emailManagementService.addService(category, email, createServiceDto);
  }

  @Put(':category/:email/services/:serviceId')
  updateService(
    @Param('category') category: string,
    @Param('email') email: string,
    @Param('serviceId') serviceId: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.emailManagementService.updateService(category, email, serviceId, updateServiceDto);
  }

  @Delete(':category/:email/services/:serviceId')
  deleteService(
    @Param('category') category: string,
    @Param('email') email: string,
    @Param('serviceId') serviceId: string,
  ) {
    return this.emailManagementService.deleteService(category, email, serviceId);
  }
}
