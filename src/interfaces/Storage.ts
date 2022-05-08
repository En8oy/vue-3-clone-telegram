interface Storage {
    get: (key:string) => any;
    set: (key : string, value : any) => void;
    delete: () => void;
}

export default {Storage}