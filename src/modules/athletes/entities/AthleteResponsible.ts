import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Address } from "./Address";

@Entity("athleteResponsible")
class AthleteResponsible {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    rg: string;

    @Column({ nullable: true })
    email?: string;

    @Column()
    phoneNumber: string;

    @Column()
    profession: string;

    @Column()
    maritalStatus: string;

    @Column()
    addressId?: string;

    @OneToOne(() => Address)
    @JoinColumn({ name: "addressId" })
    address: Address;

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

export { AthleteResponsible };