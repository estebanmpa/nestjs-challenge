import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import typeorm from "./typeorm/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [typeorm],
            isGlobal: true
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => (configService.get('typeorm'))
        })
    ],
})
export class EnvironmentModule { }