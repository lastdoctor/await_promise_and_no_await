import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}
  async withoutAwait() {
    return this.appRepository.withoutAwait();
  }

  async withAwait() {
    return await this.appRepository.withAwait();
  }
}
