import { IsNotEmpty } from 'class-validator';

export class MemberDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  memberFunction: string;
}
