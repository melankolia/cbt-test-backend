export type PayloadCreateDepresi = {
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
    q10: number;
    q11: number;
    q12: number;
    q13: number;
    q14: number;
    q15: number;
    q16: number;
    q17: number;
    q18: number;
    q19: number;
    q20: number;
}

export interface DepresiService {
    findOne(id_username: string): Promise<any>;
    create(payload: PayloadCreateDepresi): Promise<any>
}