import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUsersParamsDto {
  // method to find all users
  public FindAll() {
    return [
      {
        firstName: 'Mindia',
        email: 'mindia@gmail.com',
      },
      {
        firstName: 'giorgi',
        email: 'giorgi@gmail.com',
      },
    ];
  }

  public findOneById(id: string) {
    console.log(id);
    return {
      id: 1234,
      firstName: 'giorgi',
      email: 'girgoi@gmail.com',
    };
  }
}
