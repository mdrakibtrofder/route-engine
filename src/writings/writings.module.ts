import { Module } from '@nestjs/common';
import { WritingsController } from './writings.controller';
import { WritingsService } from './writings.service';

@Module({
  controllers: [WritingsController],
  providers: [WritingsService],
})
export class WritingsModule {}
