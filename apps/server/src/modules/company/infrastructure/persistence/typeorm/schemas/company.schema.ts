import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Transfer } from "./transfer.schema";

@Entity({ name: "company" })
export class Company {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true, name: 'business_name' })
    businessName: string;

    @Column({ name: 'tax_number' })
    taxNumber: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @OneToMany(() => Transfer, transfer => transfer.company)
    transfers: Transfer[];
}