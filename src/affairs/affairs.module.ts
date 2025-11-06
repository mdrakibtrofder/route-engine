import { Module } from '@nestjs/common';
import { AffairsController } from './affairs.controller';
import { AffairsService } from './affairs.service';

@Module({
  controllers: [AffairsController],
  providers: [AffairsService]
})
export class AffairsModule {}
