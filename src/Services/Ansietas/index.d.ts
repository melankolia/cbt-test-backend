export type PayloadAnsietas = {
    id_user: string;
    q1: number;
    q2: number;
    q3: number;
    q4: number;
    q5: number;
    q6: number;
    q7: number;
    q8: number;
    q9: number;
}

export interface AnsietasService {
    create(payload: PayloadAnsietas): Promise<any>
}