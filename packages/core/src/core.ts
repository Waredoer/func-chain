const funcChain = (funcs: Function[]) =>
    async (...args: any[]) =>
        funcs.reduce<Promise<any>>(async (_, func: Function) => await func.apply(null, args), Promise.resolve());

export default funcChain;