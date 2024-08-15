import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './cretate-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto) {}
