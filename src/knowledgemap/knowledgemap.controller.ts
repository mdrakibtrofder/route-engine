import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { KnowledgeMapService } from './knowledgemap.service';
import { CreateKnowledgeNodeDto } from './dto/create-knowledge-node.dto';
import { UpdateKnowledgeNodeDto } from './dto/update-knowledge-node.dto';

@Controller('knowledge-map')
export class KnowledgeMapController {
  constructor(private readonly knowledgeMapService: KnowledgeMapService) {}

  @Post()
  create(@Body() createKnowledgeNodeDto: CreateKnowledgeNodeDto) {
    return this.knowledgeMapService.create(createKnowledgeNodeDto);
  }

  @Get()
  findAll() {
    return this.knowledgeMapService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateKnowledgeNodeDto: UpdateKnowledgeNodeDto) {
    return this.knowledgeMapService.update(+id, updateKnowledgeNodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.knowledgeMapService.remove(+id);
  }
}
