declare const funcChain: <FuncType extends Function>(funcs: FuncType[], errorHandler?: (err: any) => any) => (...args: any[]) => Promise<any>;
export default funcChain;
