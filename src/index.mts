import { add, listBuckets } from "./lib/mylib.mjs";


console.log('init');
await new Promise(f => setTimeout(f, 3000));

console.log('done');

// exports.handler = async (event: any): Promise<string> => {
//     console.log('handler');

//     return "done"
// }

// export {}
export async function handler() {
    const res = add(4,4)
    const buckets = listBuckets();
    console.log('handler: ' + res);
    console.log('buckets: ' + JSON.stringify(buckets));
}
