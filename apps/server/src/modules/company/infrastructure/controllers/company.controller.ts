import { Controller, Get, Post } from "@nestjs/common";

@Controller("company")
export class CompanyController {
    constructor() { }

    @Get()
    async find() { }

    @Post()
    async create() { }

    @Post(":id/transfer")
    async transfer() { }
}