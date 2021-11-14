type TGeo = {
    lat: string,
    lng: string,
}

type TCompany = {
    name: string,
    catchPhrase: string,
    bs: string,
}

type TAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: TGeo,
}

export type TUser = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: TAddress
    company: TCompany,
    phone: string,
    website: string,
}

export type TUsers = {
    users: TUser[],
    loading: boolean,
}