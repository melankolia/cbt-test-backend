export interface UserService {
    findAll(): Promise<any>
    create(name: string): Promise<any>
}