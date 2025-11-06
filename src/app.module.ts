import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AffairsModule } from './affairs/affairs.module';
import { BooksModule } from './books/books.module';
import { CoursesModule } from './courses/courses.module';
import { EventsModule } from './events/events.module';
import { ProjectsModule } from './projects/projects.module';
import { IdeasModule } from './ideas/ideas.module';
import { KnowledgeMapModule } from './knowledgemap/knowledgemap.module';
import { MeetUpsModule } from './meetups/meetups.module';
import { ReadingsModule } from './readings/readings.module';
import { SpeechModule } from './speech/speech.module';
import { StacksModule } from './stacks/stacks.module';
import { TasksModule } from './tasks/tasks.module';
import { TrackingModule } from './tracking/tracking.module';
import { VideosModule } from './videos/videos.module';
import { WritingsModule } from './writings/writings.module';

@Module({
  imports: [
    AffairsModule,
    BooksModule,
    CoursesModule,
    EventsModule,
    ProjectsModule,
    IdeasModule,
    KnowledgeMapModule,
    MeetUpsModule,
    ReadingsModule,
    SpeechModule,
    StacksModule,
    TasksModule,
    TrackingModule,
    VideosModule,
    WritingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
