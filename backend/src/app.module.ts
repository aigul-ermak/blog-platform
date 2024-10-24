/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'devJPA',
    password: 'Dev1234!',
    database: 'blog_db',
    entities: [User],
    synchronize: true,
  }),

TypeOrmModule.forFeature([User])

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
