import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './interfaces/project.interface';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    const project: Omit<Project, 'id'> = {
      ...createProjectDto,
      progress: 0,
      linkedTasks: 0,
      linkedResources: 0,
    };
    return this.projectsService.create(project);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}