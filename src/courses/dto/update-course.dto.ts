import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  progress?: number;
  status?: "completed" | "in-progress" | "planned";
  certificateUrl?: string | null;
}
