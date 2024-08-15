import { Injectable } from '@nestjs/common';

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
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
  cretate(user: {
    name: string;
    role: 'INTERN' | 'ENGINEER' | ' ADMIN';
    email: string;
  }) {
    const userByHightestId = [...this.users].sort((a, b) => (b.id = a.id));
    const newUser = {
      id: userByHightestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    userUpdate: {
      name: string;
      role: 'INTERN' | 'ENGINEER' | ' ADMIN';
      email: string;
    },
  ) {
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
