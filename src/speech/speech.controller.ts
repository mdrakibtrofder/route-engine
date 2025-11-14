import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SpeechService } from './speech.service';
import { CreateSpeechDto } from './dto/create-speech.dto';
import { UpdateSpeechDto } from './dto/update-speech.dto';
import { Speech } from './interfaces/speech.interface';

@Controller('speech')
export class SpeechController {
  constructor(private readonly speechService: SpeechService) {}

  @Post()
  create(@Body() createSpeechDto: CreateSpeechDto) {
    const speech: Omit<Speech, 'id'> = {
      ...createSpeechDto,
      deliveries: [],
    };
    return this.speechService.create(speech);
  }

  @Get()
  findAll() {
    return this.speechService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSpeechDto: UpdateSpeechDto) {
    return this.speechService.update(+id, updateSpeechDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speechService.remove(+id);
  }
}
