import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { SignInDto } from 'src/auth/dto/signin-user.dto';

import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, MappingProfile, type Mapper } from '@automapper/core';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, CreateUserDto, UserEntity);
      createMap(mapper, SignInDto, UserEntity);
    };
  }

}