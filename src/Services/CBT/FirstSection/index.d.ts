export type PayloadCreateFirstSection = {
    id_user: string,
    situasi: string,
    pikiran: string,
    distorsi_pikiran: string,
    perasaan: string,
    tingkatan_perasaan: string,
    perilaku: string,
    konsekuensi: string,
    paling_mengganggu: string,
}
export interface CBT_FirstSection {
    create(payload: PayloadCreateFirstSection): Promise<any>
}