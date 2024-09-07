// const generateLetterContent = (user: IUser): string => {
//     const letterData = {
//       name: user.staffName?.firstName ?? 'Unknown',
//       newSchool: user.schoolOfPresentPosting?.nameOfSchool ?? 'Unknown',
//       position: user?.position ?? 'Unknown',
//       previousSchool: user?.ward,
//     };

//     if (
//       (letterData.position === 'Principal' || letterData.position === 'Vice-Principal') &&
//       user.staleOrNew === 'New'
//     ) {
//       return `I am directed to inform you that the Ogun State Teaching Service Commission has approved your appointment as the ${
//         letterData.position
//       } to ${letterData.newSchool} with effect from ${
//         user?.position === 'Principal' ? '30th July, 2024' : '31st July, 2024'
//       }.

//       2.      Kindly ensure that you handover all school documents and materials in your care to your Principal before leaving.

//       3.      Congratulations on this well-deserved elevation.`;
//     }

//     if (letterData?.position === 'Vice-Principal' && user?.staleOrNew === 'Stale') {
//       return `I am directed to inform you that the Teaching Service Commission has approved your redeployment from ${user.schoolOfPreviousPosting} to ${user.schoolOfPresentPosting} with immediate effect.

//       2.    Kindly ensure a strict compliance and proper handing over of all the school materials in your possession to your principal immediately.

//       3.    Please, you are to forward to the Commission the evidence of assumption of duty not later than two(2) weeks of the assumption at the new office.

//       4.    Thank you.`;
//     }

//     if (letterData?.position === 'Principal' && user?.staleOrNew === 'Stale') {
//       return `I am directed to inform you that the Ogun State Teaching Service Commission has approved your redeployment from ${user?.ward} to ${user?.schoolOfPresentPosting} with immediate effect.

//       2.    Kindly ensure proper handing over before leaving.

//       3.    Many thanks`;
//     }

//     return '';
//   };
