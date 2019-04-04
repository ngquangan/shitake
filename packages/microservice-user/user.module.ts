import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { UserController } from './infrastructure/api/user.controller';
import { UserService } from './business/user.service';
import { UserCommandHandlers } from './business/command/handler';
import { UserEventHandlers } from './domain/event/handler';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [UserService, ...UserCommandHandlers, ...UserEventHandlers],
})
export class UserModule {}