import { NextFunction, Request, Response } from "express";

class APIError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorHandlerMiddleware = function (err: APIError | any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof APIError) {
        console.log(`[${err.statusCode}: ${err.message}\n${err.stack}]`);
        return res.status(err.statusCode).json({ msg: err.message });
    } else if (err instanceof Error) {
        console.log(`500: ${err.message}\n${err.stack}`);
        return res.status(500).json({ msg: err.message });
    }
    console.log(`500: ${err.message}`);
    return res.status(500).json({ msg: "Something went wrong, please try again" });
};
