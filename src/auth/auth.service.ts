import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Account } from './schemas/account.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<Account>,
    private readonly jwtService: JwtService,
  ) {}

  // Login method
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    
    // Check if the account exists
    const account = await this.accountModel.findOne({ email });
    if (!account) {
      return null;  // Return null if user doesn't exist
    }
    
    // Validate password
    const isPasswordValid = await bcrypt.compare(password, account.password);
    if (!isPasswordValid) {
      return null;  // Return null if password is incorrect
    }

    // Generate JWT token
    const payload = { email: account.email, id: account._id };
    const token = this.jwtService.sign(payload);

    return { token };  // Return the token
  }

  // Registration method (optional)
  async register(registerDto: RegisterDto) {
    const { email, password, fullname } = registerDto;
    
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAccount = new this.accountModel({
      email,
      password: hashedPassword,
      fullname,
    });

    return newAccount.save();
  }
}
