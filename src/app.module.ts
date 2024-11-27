import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationModule } from './organization/organization.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { StackModule } from './stack/stack.module';

@Module({
  imports: [AuthModule, UsersModule, OrganizationModule, StackModule],
  controllers: [],
  providers: [JwtAuthGuard],
})
export class AppModule {}
