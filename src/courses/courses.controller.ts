import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './interfaces/course.interface';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    const course: Omit<Course, 'id'> = {
      ...createCourseDto,
      progress: 0,
      status: 'planned',
      certificateUrl: null,
    };
    return this.coursesService.create(course);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}