import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './accounts/users.module';
import { dataProviders } from './persistence/data-source.provider';

@Module({
  imports: [
    OrdersModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [...dataProviders, AppService,]
})
export class AppModule { }
