import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MeetUpsService } from './meetups.service';
import { CreateMeetUpDto } from './dto/create-meetup.dto';
import { UpdateMeetUpDto } from './dto/update-meetup.dto';
import { MeetUp } from './interfaces/meetup.interface';

@Controller('meetups')
export class MeetUpsController {
  constructor(private readonly meetUpsService: MeetUpsService) {}

  @Post()
  create(@Body() createMeetUpDto: CreateMeetUpDto) {
    const meetup: Omit<MeetUp, 'id'> = {
      ...createMeetUpDto,
      photos: 0,
    };
    return this.meetUpsService.create(meetup);
  }

  @Get()
  findAll() {
    return this.meetUpsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMeetUpDto: UpdateMeetUpDto) {
    return this.meetUpsService.update(+id, updateMeetUpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetUpsService.remove(+id);
  }
}
