import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./company.schema";

@Entity({ name: "transfer" })
export class Transfer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Company, company => company.transfers)
    @JoinColumn({ name: 'company_id' })
    company: Company;

    @Column({ name: 'source_account' })
    sourceAccount: string;

    @Column({ name: 'target_account' })
    targetAccount: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}