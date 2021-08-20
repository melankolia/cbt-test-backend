export type PayloadUser = {
    username: string,
    password: string
}

export type PayloadFindUsers = {
    search: string,
    limit: number,
    page: number,
}

export type PayloadCreateUser = {
    id: string,
    name: string,
    username: string,
    password: string
}
export interface UserService {
    find(payload: PayloadUser): Promise<any>
    create(payload: PayloadCreateUser): Promise<any>
    findAll(payload: PayloadFindUsers): Promise<any>
    findOne(secureId: string): Promise<any>
}