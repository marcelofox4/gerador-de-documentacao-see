
interface ICreateAthleteDTO {
    name: string;
    cpf: string;
    rg: string;
    email?: string;
    phoneNumber?: string;
    profession?: string;
    maritalStatus?: string;
    addressId?: string;
    athleteResponsibleId?: string;
}

export { ICreateAthleteDTO };