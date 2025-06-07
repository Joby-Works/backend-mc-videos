import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PersistenceModule } from 'src/persistence/persistense.module';

@Module({
  imports: [PersistenceModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
