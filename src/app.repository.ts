import { Injectable } from '@nestjs/common';

@Injectable()
export class AppRepository {
  async withoutAwait() {
    return Promise.reject(new Error('return with out await'));
  }

  async withAwait() {
    return await Promise.reject(new Error('return with await'));
  }
}
