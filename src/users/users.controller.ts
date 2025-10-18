import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersContrioller {
  constructor(private readonly usersService: UsersService) {}

  @Get('{/:id}')
  public getUser(
    @Param() getUserParamDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: any,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: any,
  ) {
    return this.usersService.findAll(getUserParamDto);
  }
  @Post()
  public createUser(@Body() request: CreateUserDto) {
    console.log(request instanceof CreateUserDto);

    return 'Here is your post request';
  }
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
  }
}
