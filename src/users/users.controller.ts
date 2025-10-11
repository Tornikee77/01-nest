import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  //   @Get ("/:id?")
  public getUsers(@Param() params: { id: string }, @Query() query: any) {
    console.log(params);
    console.log(query);
    return `Yous send a Get Request to users with id: ${params.id}  `;
  }
  @Post()
  public createUSer() {
    return 'Here is a your post request';
  }
}
