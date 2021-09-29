export type PayloadSurveys = {
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
}

export interface SurveyService {
    findOne(id_user: string): Promise<any>
    create(payload: PayloadSurveys): Promise<any>
}