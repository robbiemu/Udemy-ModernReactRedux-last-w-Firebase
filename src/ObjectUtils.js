export const JSONcopy = (o) => JSON.parse(JSON.stringify(o))

export const Omap = (o, cb) => Object.keys(o).map((k,i) => cb(o[k],k))