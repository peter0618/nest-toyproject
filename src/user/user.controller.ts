import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) : Promise<User | { result: boolean; message: string }>{
    return await this.userService.findOne(id);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Patch()
  async patchUser(@Body() user: User) {
    this.userService.patchUser(user);
  }

  @Put()
  async putUser(@Body() user: User) {
    this.userService.putUser(user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    console.log(id);
    this.userService.deleteUser(id);
  }
}
