import { add, listAllBuckets } from "./lib/mylib.js";
import S3 from "aws-sdk/clients/s3.js";


console.log('init, cound to 3');
await new Promise(f => setTimeout(f, 3000));
console.log('done');

const s3 = new S3({});
export async function handler() {
    const res = add(4,4)
    const buckets = listAllBuckets(s3);
    console.log('handler: ' + res);
    console.log('buckets: ' + JSON.stringify(buckets));
}
