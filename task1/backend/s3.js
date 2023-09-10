const aws=require('aws-sdk')
const dotenv=require('dotenv')
const crypto=require('crypto')
const { promisify } = require('util');

const randomBytes = promisify(crypto.randomBytes);

dotenv.config()

const region="ap-south-1"
const bucketName="your-bucket-name"
const accessKeyId="your-access-key"
const secretAccessKey="your-secret-key"

const s3=new aws.S3({

    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

  const generateUploadURL = async()=>{
    const rawBytes=await crypto.randomBytes(16)
    const imageName=rawBytes.toString('hex')

    const params = ({
        Bucket: bucketName,
        Key:imageName,
        
    })

    const uploadURL=await s3.getSignedUrlPromise('putObject',params)
    return uploadURL
}
module.exports={generateUploadURL}
