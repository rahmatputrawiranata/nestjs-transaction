import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { TransactionModule } from './transaction/transaction.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [UsersModule, AuthModule, ProductsModule, TransactionModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
