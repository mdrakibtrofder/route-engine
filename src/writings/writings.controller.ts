import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { WritingsService } from './writings.service';
import { CreateWritingDto } from './dto/create-writing.dto';
import { UpdateWritingDto } from './dto/update-writing.dto';

@Controller('writings')
export class WritingsController {
  constructor(private readonly writingsService: WritingsService) {}

  @Post()
  create(@Body() createWritingDto: CreateWritingDto) {
    return this.writingsService.create(createWritingDto);
  }

  @Get()
  findAll() {
    return this.writingsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWritingDto: UpdateWritingDto) {
    return this.writingsService.update(+id, updateWritingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writingsService.remove(+id);
  }
}
