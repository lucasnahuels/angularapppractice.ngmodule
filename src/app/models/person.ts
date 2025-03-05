export interface Person {
    id: number;
    name: string;
    gender: string;
    age: number;
    skills?: { name: string }[];
}