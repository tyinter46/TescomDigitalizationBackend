import { Response } from 'express';
import Papa from 'papaparse';
import CommonService from '../modules/common/service';

interface CsvOptions {
  data: any[]; // Array of objects to be converted to csv
  fields: string[]; // fields/columns to include in CSV
  filename: string; // file name for csv
}

export const generateCsv = ({ data, fields, filename }: CsvOptions, res: Response) => {
  try {
    // Convert JSON → CSV
    const csv = Papa.unparse(data, {
      columns: fields,
      skipEmptyLines: true,
    });

    // Set headers for browser download
    res.header('Content-Type', 'text/csv');
    res.attachment(filename);
    res.send(csv);
  } catch (error) {
    CommonService.UnprocessableResponse('Failed to generate CSV', res);
  }
};
