/// <reference types="react-scripts" />

declare module "react/jsx-runtime" {
    export default any;
}

declare module "parsing" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}

