import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/cretate-user.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'thanh a',
      email: 'thanha.okvip.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'thanh b',
      email: 'thanhb.okvip.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'thanh 3',
      email: 'thanh3.okvip.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'thanh 4',
      email: 'thanh4.okvip.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | ' ADMIN') {
    if (role) {
      const roleArray = this.users.filter((user) => user.role === role);
      if (roleArray.length === 0)
        throw new NotFoundException('User Role not found');
      return roleArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`User id: ${id} not found`);
    return user;
  }
  cretate(user: CreateUserDto) {
    const userByHightestId = [...this.users].sort((a, b) => (b.id = a.id));
    const newUser = {
      id: userByHightestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, userUpdate: UpdateUserDto) {
    this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const remoteUser = this.findOne(id);
    this.users.filter((user) => user.id !== id);
    return remoteUser;
  }
}
