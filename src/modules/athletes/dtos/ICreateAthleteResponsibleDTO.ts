
interface ICreateAthleteResponsibleDTO {
    name: string;
    cpf: string;
    rg: string;
    gender: string;
    email?: string;
    phoneNumber: string;
    profession: string;
    maritalStatus: string;
    addressId?: string;
}

export { ICreateAthleteResponsibleDTO };