import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("address")
class Address {

    @PrimaryColumn()
    id?: string;

    @Column()
    street: string;

    @Column({ nullable: true })
    number?: number;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column({ nullable: true })
    cep?: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    update_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Address };