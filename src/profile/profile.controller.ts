import { Controller, Get, Body, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfile() {
    return this.profileService.getProfile();
  }

  // Example of an update endpoint. We can add more specific ones later.
  @Put()
  updateProfile(@Body() updateProfileDto: UpdateProfileDto) {
    // In a real app, you would partially update the profile data.
    // For now, this is just a placeholder.
    return {
      message: 'Profile update not implemented yet.',
      data: updateProfileDto,
    };
  }
}
