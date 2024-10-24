/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

@Post('register')  
async register(
  @Body('name') name: string,
  @Body('email') email: string,
  @Body('password') password: string,
){
  
  const hashedPassword = await  bcrypt.hash(password, 12);

  return this.appService.create({
    name, 
    email,
    password: hashedPassword
  })
}

@Post('login')
async Login(
  @Body('email') email: string,
  @Body('password') password: string,
){

  const user = await this.appService.findOne({ where: {email}});

  if(!user){
    throw new BadRequestException('Invalid credentials');
  }

  if(!await bcrypt.compare(password, user.password)){
    throw new BadRequestException('Invalid credentials');
  }

  return user

}

}
