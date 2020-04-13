import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {

  private users = [
    new User(1, "Peter", 36),
    new User(2, "Grace", 34),
    new User(3, "Kevin", 27)
  ];

  async findAllUsers() {
    console.log(this.users);
    return this.users;
  }

  async findOne(id: number) {
    for(const user of this.users){
      console.log(user.id);
      if(user.id == id) {
        return user;
      }
    }
    return {
      result: false,
      message: `There is no user has id = ${id}`
    };
  }

  createUser(createUserDto: CreateUserDto) {
    // TODO : users 에 id가 중복되지는 않는지 확인해야 합니다.
    this.users.push(new User(createUserDto.id, createUserDto.name, createUserDto.age));
    console.log(createUserDto);
  }

  patchUser(userReq: User) {
    for(const user of this.users) {
      if(user.id == userReq.id){
        user.name = userReq.name ? userReq.name : user.name;
        user.age = userReq.age ? userReq.age : user.age;
      }
    }
  }

  putUser(userReq: User) {
    for(const user of this.users) {
      if(user.id == userReq.id){
        user.name = userReq.name;
        user.age = userReq.age;
      }
    }
  }

  deleteUser(id: number) {
    console.log(`delete id : ${id}`);
    for(const user of this.users){
      if(user.id == id) {
        console.log(this.users.indexOf(user));
        this.users.splice(this.users.indexOf(user), 1);
        break;
      }
    }
  }
}
