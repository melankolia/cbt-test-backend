export type PayloadUser = {
    username: string,
    password: string
}

export type PayloadCreateUser = {
    id: string,
    name: string,
    username: string,
    password: string
}
export interface UserService {
    findAll(payload: PayloadUser): Promise<any>
    create(payload: PayloadCreateUser): Promise<any>
}