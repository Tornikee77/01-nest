import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get('{/:id}')
  public getUsers(@Param() getUserParamDTo: GetUsersParamsDto) {
    console.log(getUserParamDTo);
    return `you send a get request to users endpoint`;
  }
  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    // console.log(createUserDto instanceof createUserDto);
    console.log(createUserDto);
    return 'here is your post';
  }
  @Patch() public patchUser(@Body() PatchUserDto: PatchUserDto) {
    return PatchUserDto;
  }
}
