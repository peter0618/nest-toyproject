import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {

  async getMoney(balance: number) {
    console.log("commit test!!");
    console.log("commit test2!!");
    console.log("commit test3!!");
    return balance;
  }
}
