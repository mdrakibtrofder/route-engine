import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { CreateHabitDto, CreateSkillDto, CreateMemorizationDto, CreateObjectiveDto } from './dto/create-tracking.dto';
import { UpdateHabitDto, UpdateSkillDto, UpdateMemorizationDto, UpdateObjectiveDto } from './dto/update-tracking.dto';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post('habits')
  createHabit(@Body() createHabitDto: CreateHabitDto) {
    return this.trackingService.createHabit(createHabitDto);
  }

  @Get('habits')
  findAllHabits() {
    return this.trackingService.findAllHabits();
  }

  @Put('habits/:id')
  updateHabit(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.trackingService.updateHabit(+id, updateHabitDto);
  }

  @Delete('habits/:id')
  removeHabit(@Param('id') id: string) {
    return this.trackingService.removeHabit(+id);
  }

  @Post('skills')
  createSkill(@Body() createSkillDto: CreateSkillDto) {
    return this.trackingService.createSkill(createSkillDto);
  }

  @Get('skills')
  findAllSkills() {
    return this.trackingService.findAllSkills();
  }

  @Put('skills/:id')
  updateSkill(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.trackingService.updateSkill(+id, updateSkillDto);
  }

  @Delete('skills/:id')
  removeSkill(@Param('id') id: string) {
    return this.trackingService.removeSkill(+id);
  }

  @Post('memorizations')
  createMemorization(@Body() createMemorizationDto: CreateMemorizationDto) {
    return this.trackingService.createMemorization(createMemorizationDto);
  }

  @Get('memorizations')
  findAllMemorizations() {
    return this.trackingService.findAllMemorizations();
  }

  @Put('memorizations/:id')
  updateMemorization(@Param('id') id: string, @Body() updateMemorizationDto: UpdateMemorizationDto) {
    return this.trackingService.updateMemorization(+id, updateMemorizationDto);
  }

  @Delete('memorizations/:id')
  removeMemorization(@Param('id') id: string) {
    return this.trackingService.removeMemorization(+id);
  }

  @Post('objectives')
  createObjective(@Body() createObjectiveDto: CreateObjectiveDto) {
    return this.trackingService.createObjective(createObjectiveDto);
  }

  @Get('objectives')
  findAllObjectives() {
    return this.trackingService.findAllObjectives();
  }

  @Put('objectives/:id')
  updateObjective(@Param('id') id: string, @Body() updateObjectiveDto: UpdateObjectiveDto) {
    return this.trackingService.updateObjective(+id, updateObjectiveDto);
  }

  @Delete('objectives/:id')
  removeObjective(@Param('id') id: string) {
    return this.trackingService.removeObjective(+id);
  }
}
