import { PartialType } from '@nestjs/mapped-types';

class CreateProfileDto {
  // Define properties for creating a profile if needed, for now we can leave it empty
  // as the profile is mostly static data in the service.
}

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  // You can add properties here that are updatable.
  // For example:
  // status?: string;
  // bio?: string;
}
