declare module "*.json" {
    const value: any;
    export default value;
}

declare interface String {
    toProperCase(): string;
}

declare var sCH: any;

//declare var React: any;
//declare var ReactDOM: any;

interface Window {
    [key: string]: any;
}
interface JQuery {
    hyphenate(data?:any,options?:any): JQuery;
}
type $ = JQuery;

interface JQueryStatic {
    xhrPool: any;
    timeouts: any;
    tablesorter: any;
    embedly: any;
    intervals: any;
}

interface String {
    format: any;
    replaceAll: any;
}

declare module alcfg {
}
