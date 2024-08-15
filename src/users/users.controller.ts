import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | ' ADMIN') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findOne(+id); // +id: ép kiểu về number
  }

  @Post()
  create(
    @Body()
    user: {
      name: string;
      role: 'INTERN' | 'ENGINEER' | ' ADMIN';
      email: string;
    },
  ) {
    return this.userService.cretate(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name: string;
      role: 'INTERN' | 'ENGINEER' | ' ADMIN';
      email: string;
    },
  ) {
    return this.userService.update(+id, userUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
