import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  getAllUser() {
    return this.userRepository.find();
  }

  addDumpUser() {
    const dumpUser = this.userRepository.create({
      firstName: 'Vuong',
      lastName: 'Tran ',
    });
    return this.userRepository.save(dumpUser);
  }
}
