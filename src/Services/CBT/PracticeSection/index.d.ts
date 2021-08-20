export type PayloadCreatePracticeSection = {
    id_user: string;
    step_21: string;
    step_22: string;
    step_23: string;
    step_24: string;
    step_25: string;
    step_26: string;
}

export interface CBT_PracticeSection {
    create(payload: PayloadCreatePracticeSection): Promise<any>;
}