import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-email-management.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {}
