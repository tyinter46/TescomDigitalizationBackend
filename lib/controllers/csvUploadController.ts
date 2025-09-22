import { Request, Response } from 'express';
import fs from 'fs';
import Papa from 'papaparse';
import CommonService from '../modules/common/service';

export class CsvUploadController {
  public async uploadCsv(req: Request, res: Response) {
    try {
      if (!req.file) {
      return CommonService.UnprocessableResponse('No file uploaded', res);
    }

    const file = fs.readFileSync(req.file.path, 'utf8');

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          const mappedData = results.data
            .filter((row: any) => row.SN) // filter out empty SN rows
          

          if (!mappedData.length) {
            return CommonService.UnprocessableResponse('Invalid CSV format', res);
          }

          // 🚀 TODO: push `mappedData` into BullMQ queue here

          return res.status(200).json({
            STATUS: 'SUCCESS',
            MESSAGE: 'CSV uploaded and processed successfully',
            DATA: mappedData,
          });
        } catch (err) {
          return CommonService.UnprocessableResponse('Error processing CSV', res);
        }
      },
    });
  } catch (error) {
    return CommonService.UnprocessableResponse('Failed to upload CSV', res);
  }
}
}
