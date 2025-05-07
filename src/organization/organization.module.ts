import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
  imports: [PrismaModule, UsersModule],
})
export class OrganizationModule {}
