export type PayloadCreateMainSection = {
    id_user: string;
    step_11: string;
    step_12: string;
    step_13: string;
    step_14: string;
    step_15: string;
    step_16: string;
    step_17: string;
    step_18: string;
    step_19: number;
    step_20: number;
}

export interface CBT_MainSection {
    create(payload: PayloadCreateMainSection): Promise<any>;
}