import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  firstName: string;
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(20)
  lastName?: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @Matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/, {
    message:
      'Password too weak. It must contain at least one uppercase letter, one lowercase letter, one number and one special character.',
  })
  password: string;
}
