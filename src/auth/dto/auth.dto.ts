import {
  IsNotEmpty,
  IsEmail,
  IsString,
  Length,
  IsNumber,
} from 'class-validator';

export class AuthDto {
  @IsEmail()
  public email: string;

  @IsString()
  public userName: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Mat Khau dai tu 3 den 20 ky tu' })
  public password: string;

  @IsNotEmpty()
  @IsString()
  public fullName: string;

  @IsNotEmpty()
  @IsString()
  public numberPhone: string;

  @IsString()
  public sex: string;

  @IsString()
  public permissionCode: string;
  @IsString()
  public className: string;
}
export class AuthDtoLogin {
  @IsString()
  public userName: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Mat Khau dai tu 3 den 20 ky tu' })
  public password: string;
}
