import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("address")
class Address {

    @PrimaryColumn()
    id?: string;

    @Column()
    street: string;

    @Column()
    number?: number;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    cep: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    update_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }

        if (!this.number) {
            this.number = 0;
        }
    }
}

export { Address };