import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [AuthModule, InvoicesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
