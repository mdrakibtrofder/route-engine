import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AffairsService } from './affairs.service';
import { Affair } from './interfaces/affair.interface';
import { CreateAffairDto } from './dto/create-affair.dto';
import { UpdateAffairDto } from './dto/update-affair.dto';

@Controller('affairs')
export class AffairsController {
  constructor(private readonly affairsService: AffairsService) {}

  @Post()
  create(@Body() createAffairDto: CreateAffairDto) {
    return this.affairsService.create(createAffairDto);
  }

  @Get()
  findAll(): Affair[] {
    return this.affairsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAffairDto: UpdateAffairDto) {
    return this.affairsService.update(+id, updateAffairDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affairsService.remove(+id);
  }
}
