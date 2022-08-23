
import S3, { Bucket } from "aws-sdk/clients/s3.js";

export function add(num: number, num2: number) {
    return num + num2;
}


export async function listBuckets(): Promise<Bucket[]> {

    const s3 = new S3({});
    try {
        const res = await s3.listBuckets().promise();
        console.log('done')
        console.log(JSON.stringify(res));

        return res.Buckets!
    } catch (e) {
        console.error(e);
    }

    return [];
}

