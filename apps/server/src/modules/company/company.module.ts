import { Module } from "@nestjs/common";
import { CompanyController } from "./infrastructure/controllers/company.controller";

@Module({
    imports: [],
    controllers: [CompanyController],
    providers: [],
})
export class CompanyModule { }
