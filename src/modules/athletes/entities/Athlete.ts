import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Address } from "../../address/entities/Address";
import { AthleteResponsible } from "./AthleteResponsible";

@Entity("athlete")
class Athlete {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    rg: string;

    @Column()
    gender: string;

    @Column({ nullable: true })
    email?: string;

    @Column({ nullable: true })
    phoneNumber?: string;

    @Column({ nullable: true })
    profession?: string;

    @Column({ nullable: true })
    maritalStatus?: string;

    @Column()
    status: boolean;

    @Column()
    addressId?: string;

    @OneToOne(() => Address)
    @JoinColumn({ name: "addressId" })
    address: Address;

    @Column()
    athleteResponsibleId?: string;

    @OneToOne(() => AthleteResponsible)
    @JoinColumn({ name: "athleteResponsibleId" })
    athleteResponsible: AthleteResponsible;

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

export { Athlete };