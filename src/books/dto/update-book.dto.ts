import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  progress?: number;
  rating?: number;
  quotes?: string[];
  endDate?: string;
}
