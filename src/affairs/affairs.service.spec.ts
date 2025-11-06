import { Test, TestingModule } from '@nestjs/testing';
import { AffairsService } from './affairs.service';

describe('AffairsService', () => {
  let service: AffairsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffairsService],
    }).compile();

    service = module.get<AffairsService>(AffairsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
