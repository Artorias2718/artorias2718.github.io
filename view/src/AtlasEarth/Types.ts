export interface IData {
    id: number;
    label: string;
    description: string;
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface IParcelType {
    id: number;
    rate: number;
    type: string;
}

export interface IRentRow {
    id: number;
    row: number[];
}

export interface IResource {
    label: string;
    description: string;
    href: string;
}