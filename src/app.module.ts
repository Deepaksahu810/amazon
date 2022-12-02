import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { childrenCategories } from './entities/childrenCategories';
import { subCategories } from './entities/subCategories';
import { masterCategories } from './entities/masterCategories';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';
import { ApiModule } from './api/api.module';
const envFilePath: string = getEnvPath(`src/common/envs`);

@Module({
 
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    ApiModule
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '13.235.68.13',
    //   port: 3306,
    //   username: 'recruitbaeuser',
    //   password: 'jtpdsdsd123',
    //   database: 'some',
    //   entities: [childrenCategories,subCategories,masterCategories],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


