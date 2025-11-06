import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetUpDto } from './create-meetup.dto';

export class UpdateMeetUpDto extends PartialType(CreateMeetUpDto) {
  photos?: number;
}
