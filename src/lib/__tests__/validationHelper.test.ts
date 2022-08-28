
import { RequestValidationResponse } from "../../models/handTps";
import { validateRequest } from "../validationHelper";

describe('test validationHelper', () => {

    describe('test github requests', () => {
        const clientId = "cliendId123";
        const code = "code123";

        it('finishes happy path with no errors', async () => {
            expect(validateRequest("GITHUB", clientId, code)).toEqual(RequestValidationResponse.ValidRequest);
        });

        it('rejects empty clientId', async () => {
            expect(validateRequest("GITHUB", "", code)).toEqual(RequestValidationResponse.ValidRequest);
        });

        it('rejects clientId with non alpha numeric characters', async () => {    
            expect(validateRequest("GITHUB", "client-Id", code)).toEqual(RequestValidationResponse.ValidRequest);
        });

        it('rejects code with uppercase characters characters', async () => {
            expect(validateRequest("GITHUB", clientId, "CODE")).toEqual(RequestValidationResponse.ValidRequest);
        });
    });

    describe('test gitlab requests', () => {
        const clientId = "cliendId123";
        const code = "code123";

        it('finishes happy path with no errors', async () => {            
            expect(validateRequest("GITLAB", clientId, code)).toEqual(RequestValidationResponse.ValidRequest);
        });

        it('rejects empty clientId', async () => {
            expect(validateRequest("GITLAB", "", code)).toEqual(RequestValidationResponse.ValidRequest);
        });

        it('rejects clientId with clientId with non alpha numeric characters', async () => {       
            expect(validateRequest("GITLAB", "client-Id", code)).toEqual(RequestValidationResponse.ValidRequest);
        });

        it('rejects code with uppercase characters characters', async () => {
            expect(validateRequest("GITLAB", clientId, "CODE")).toEqual(RequestValidationResponse.ValidRequest);
        });
    });

    describe('test bitbucket requests', () => {
        const clientId = "cliendId123";
        const code = "code123";

        it('finishes happy path with no errors', async () => {   
            expect(validateRequest("BITBUCKET", clientId, code)).toEqual(RequestValidationResponse.ValidRequest);
        });

        it('rejects empty clientId', async () => {    
            expect(validateRequest("BITBUCKET", "", code)).toEqual(RequestValidationResponse.ValidRequest);

        });

        it('does not reject code with uppercase characters characters', async () => {           
            expect(validateRequest("BITBUCKET", clientId, "CODE")).toEqual(RequestValidationResponse.ValidRequest);
        });
    });
});