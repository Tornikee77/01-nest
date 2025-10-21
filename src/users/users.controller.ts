import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  @Get('{/:id}')
  @ApiOperation({
    summary: 'Fetch a list of registered users on the application',
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'The upper limit of page you want to pagination to returns ',
    required: true,
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'The upper limit of page you want to pagination to returns ',
    required: true,
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'The upper limit of page you want to pagination to returns ',
    required: true,
  })
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
