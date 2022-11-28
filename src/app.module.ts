import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user'
import { childrenCategories } from './entities/childrenCategories';
import { subCategories } from './entities/subCategories';
import { masterCategories } from './entities/masterCategories';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';

const envFilePath: string = getEnvPath(`src/common/envs`);

@Module({
 
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '13.235.68.13',
    //   port: 3306,
    //   username: 'recruitbaeuser',
    //   password: 'jtpdsdsd123',
    //   database: 'some',
    //   entities: [User,childrenCategories,subCategories,masterCategories],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


