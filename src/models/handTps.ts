

const INVALID_REQUEST = "Invalid request";
const UNABLE_TO_PARSE = "Unable to parse JSON";
const APP_SUSPENDED = "Amplify GitHub App Suspended";
const INTERNAL_SERVER_ERROR = "Internal Server Error";
const UNAUTHORIZED_ERROR = "Github App Not Authorized";

export class HandlerRequest {
    public httpMethod: string;
    public body: string;
}

export enum StatusCode {
    Success = 200,
    BadRequest = 400,
    InternalServerError = 500,
}

export enum RequestValidationResponse {
    ValidRequest,
    InValidRequest
}

export class HandlerResponse {
    public statusCode: StatusCode;
    public body?: string | undefined;
    public headers?: any | undefined;
}

export type GetSecretResponse = {
    Name: string,
    SecretString: string
}

export const Response = {
    UnableToParseRequest: {
        statusCode: StatusCode.BadRequest,
        body: UNABLE_TO_PARSE,
    },
    BadRequest: {
        statusCode: StatusCode.BadRequest,
        body: INVALID_REQUEST,
    },
    GitHubAppSuspended: {
        statusCode: StatusCode.BadRequest,
        body: APP_SUSPENDED,
    },
    InternalServerError: {
        statusCode: StatusCode.InternalServerError,
        body: INTERNAL_SERVER_ERROR,
    },
    Unauthorized: {
        statusCode: StatusCode.BadRequest,
        body: UNAUTHORIZED_ERROR,    
    }
}
