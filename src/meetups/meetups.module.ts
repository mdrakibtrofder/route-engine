import { Module } from '@nestjs/common';
import { MeetUpsController } from './meetups.controller';
import { MeetUpsService } from './meetups.service';

@Module({
  controllers: [MeetUpsController],
  providers: [MeetUpsService]
})
export class MeetUpsModule {}
