export default remote;
declare namespace remote {
    export function noConflict(): {
        noConflict(): any;
        plain: (log: any) => string;
        json: (log: any) => any;
        apply(logger: any, options: any): any;
        disable(): void;
        setToken: () => void;
    };
    export function noConflict(): {
        noConflict(): any;
        plain: (log: any) => string;
        json: (log: any) => any;
        apply(logger: any, options: any): any;
        disable(): void;
        setToken: () => void;
    };
    export { plain };
    export { json };
    export function apply(logger: any, options: any): any;
    export function apply(logger: any, options: any): any;
    export function disable(): void;
    export function disable(): void;
    export { setToken };
}
declare function plain(log: any): string;
declare function json(log: any): any;
declare function setToken(): void;
