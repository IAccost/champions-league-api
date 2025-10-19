import { HttpResponse } from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse> => {
    return{
        statusCode: 200,
        body: data,
    }
};

export const noContent = async (): Promise<HttpResponse> => {
    return{
        statusCode: 204,
        body: null,
    }
}

export const badRequest = async (message: string): Promise<HttpResponse> => {
    return{
        statusCode: 400,
        body: { message },
    }
}

export const created = async (): Promise<HttpResponse> => {
    return{
        statusCode: 201,
        body: {message: "Resource created successfully"},
    }
}

export const notFound = async (message: string): Promise<HttpResponse> => {
    return{
        statusCode: 404,
        body: { message },
    }
}