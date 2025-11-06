import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitDto, CreateSkillDto, CreateMemorizationDto, CreateObjectiveDto } from './create-tracking.dto';

export class UpdateHabitDto extends PartialType(CreateHabitDto) {}
export class UpdateSkillDto extends PartialType(CreateSkillDto) {}
export class UpdateMemorizationDto extends PartialType(CreateMemorizationDto) {}
export class UpdateObjectiveDto extends PartialType(CreateObjectiveDto) {}
