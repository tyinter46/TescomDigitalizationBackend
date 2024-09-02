import {v2 as cloudinary } from 'cloudinary'

export const cloudinaryConfig = cloudinary.config({cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_secret
});

// export const uploadImage  = ()=>{
// const image = './lib/utils/for of vs for in.PNG'
// cloudinary.uploader.upload(image).then(result => {
//     console.log(result)
// })
// }

