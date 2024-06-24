import { ApiProperty } from "@nestjs/swagger";

export class LogInResponse {

  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  accessToken: string;
  }

  