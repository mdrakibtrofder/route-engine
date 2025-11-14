import { Module } from '@nestjs/common';
import { KnowledgeMapController } from './knowledgemap.controller';
import { KnowledgeMapService } from './knowledgemap.service';

@Module({
  controllers: [KnowledgeMapController],
  providers: [KnowledgeMapService],
})
export class KnowledgeMapModule {}
