const funcChain = <FuncType extends Function>(funcs: FuncType[], errorHandler?: (err: any) => any) => async (...args: any[]) => {
    let res: any;

    try {
        for (let func of funcs) {
            let _res = await func.apply(null, args);

            if (typeof _res === 'function') {
                _res = _res(res);
            }

            if (_res !== undefined) {
                res = _res;
            }
        }
    } catch (err) {
        if (errorHandler) {
            res = errorHandler(err);
        } else {
            throw err;
        }
    }

    return res;
};

export default funcChain;