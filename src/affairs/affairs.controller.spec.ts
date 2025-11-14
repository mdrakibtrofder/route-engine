import { Test, TestingModule } from '@nestjs/testing';
import { AffairsController } from './affairs.controller';
import { AffairsService } from './affairs.service';

describe('AffairsController', () => {
  let controller: AffairsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AffairsController],
      providers: [AffairsService],
    }).compile();

    controller = module.get<AffairsController>(AffairsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
