import { PartialType } from '@nestjs/mapped-types';
import { CreateStackActivityDto } from './create-stack.dto';

export class UpdateStackActivityDto extends PartialType(CreateStackActivityDto) {}
