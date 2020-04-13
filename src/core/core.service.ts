import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {

  async getMoney(balance: number) {
    return balance;
  }
}
