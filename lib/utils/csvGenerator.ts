import { Response } from 'express';
import { parse } from 'json2csv';
import CommonService from '../modules/common/service';

interface CsvOptions {
  data: any[]; //Array of objects to be converted to csv
  fields: string[]; // fields to include in CSV
  filename: string; // file name for csv
}

export const generateCsv = ({ data, fields, filename }: CsvOptions, res: Response) => {
  try {
    const csv = parse(data, { fields });

    //Set headers for the response
    res.header('Content-Type', 'text/csv');
    res.attachment(filename);
    res.send(csv);
  } catch (error) {
    CommonService.UnprocessableResponse('Failed to generate CSV', res);
  }
};
