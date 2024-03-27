interface ICreateAddressDTO {
    street: string;
    number?: number;
    city: string;
    state: string;
    cep?: string;
}

export { ICreateAddressDTO };