import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('create')
  async createProfile(@Body() profileData: CreateProfileDto) {
    return this.profileService.createProfile(profileData);
  }

  @Get(':id')
  async getProfile(@Param('id') id: string) {
    return this.profileService.getProfileById(id);
  }

  @Put(':id')
  async updateProfile(
    @Param('id') id: string,
    @Body() profileData: UpdateProfileDto,
  ) {
    return this.profileService.updateProfile(id, profileData);
  }
}