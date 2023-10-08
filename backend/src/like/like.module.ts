import { Module } from '@nestjs/common';
import { LikeResolver } from './like.resolver';
import { LikeService } from './like.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    LikeResolver,
    LikeService,
    PrismaService,
    ConfigService,
    JwtService,
  ],
})
export class LikeModule {}
