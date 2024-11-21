import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async createProfile(profileData: CreateProfileDto) {
    const newProfile = new this.profileModel(profileData);
    return await newProfile.save();
  }

  async getProfileById(id: string) {
    return this.profileModel.findById(id).exec();
  }

  async updateProfile(id: string, profileData: UpdateProfileDto) {
    return this.profileModel
      .findByIdAndUpdate(
        id,
        { $set: profileData },
        { new: true, runValidators: true },
      )
      .exec();
  }
}