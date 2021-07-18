import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController implements OnModuleInit {
  constructor(private readonly userService: UserService) {}

  onModuleInit() {
    this.userService.addDumpUser();
  }

  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }
}
