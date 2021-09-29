export type PayloadIdentities = {
    id_user: string;
    name: string;
    age: number;
    gender: string;
    is_pregnant: boolean;
    education: string;
    additional_field: string;
    marital_status: string;
    job: string;
    hospital_sheet: string;
    is_covid19: string;
    frequencies: string;
}

export interface IdentitiesService {
    findOne(id_user: string): Promise<any>
    create(payload: PayloadIdentities): Promise<any>
}