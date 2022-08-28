import { RequestValidationResponse } from "../models/handTps.js";


export function validateRequest(rt: string, cid: string, c: string) {
    console.log(rt,cid,c);
    return RequestValidationResponse.ValidRequest;
}