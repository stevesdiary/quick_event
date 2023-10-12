import { Response } from "express";

export class ResponseUtl {
   static sendResponse<T>(
      res: Response, message:string, data: T, paginationInfo: any = null,
      ): Response<T> {
      return res.status(200).json({
         success: true,
         message,
         data,
         paginationInfo
      })
   }

   static sendError<T>(
      res: Response, message:string,  statusCode: number, error: T
      ): Response<T> {
      return res.status(500).json({
         success: false,
         message,
         error,
      })
   }
}