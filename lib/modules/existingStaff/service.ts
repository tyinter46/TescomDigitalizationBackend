import ExistingStaff from './schema';




export default class ExistingStaffService {


 
    
  public async  getAllStaff(query: any, options: any, callback:any) {
     ExistingStaff.paginate(query, options, callback);
     }

  public filterStaff(query: any, callback: any) {
    ExistingStaff.findOne(query, callback);
  }
}

