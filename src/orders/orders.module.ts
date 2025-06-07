import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PersistenceModule } from 'src/persistence/persistense.module';

@Module({
  imports: [PersistenceModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule { }
