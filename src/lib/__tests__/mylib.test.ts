
import AWSMock from 'aws-sdk-mock';
import AWS from 'aws-sdk';
import { add, listAllBuckets } from "../mylib"

const ot: AWS.S3.ListBucketsOutput = {
    Buckets: [
        {
            Name: 'b1'
        },
        {
            Name: 'b2'
        }
    ],
    Owner: {
        DisplayName: "DisplayName",
        ID: "ID"
    }
}

describe('testing mylib', () => {

    test('it can add', () => {
        expect(add(2, 2)).toBe(4);
    })

    test('it can list buckets', async () => {
        AWSMock.setSDKInstance(AWS);
        AWSMock.mock('S3', 'listBuckets', (callback: Function) => {
            callback(null, ot);
        })

        const s3cl = new AWS.S3({});
        const res = await listAllBuckets(s3cl);
        expect(res.length).toBe(2);
        expect(res).toEqual(ot.Buckets);
        AWSMock.restore('S3');
    })
})
