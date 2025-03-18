"use client";

import React, {useRef, useState} from 'react'
import { IKImage,  ImageKitProvider, IKUpload } from "imagekitio-next";


import config from "@/lib/config";
const {
    env:{
        imagekit:{publicKey,urlEndpoint},
    },
} = config;

const authenticator = async()=>{
    try{
        const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`)
        if(!response.ok){
            const errorText = await response.text()
            throw new Error(`Request failed with status code ${response.status}: ${errorText}`)
        }

        const data = await response.json()
        const {signature, expire, token} = data

        return{signature, expire, token}
    }catch (error:any){
        throw new Error(`Authentication failed: ${error.message}`);
    }
}
const CardUpload = ({
                        onFileChange,
                    }:{
    onFileChange:(filePath:string) => void;
}) => {

    const ikUploadRef = useRef(null)
    const [file, setFile] = useState<{filePath:string} | null>(null);

    const onError=(error)=>{}
    const onSuccess=(res:any)=> {
        setFile(res);
        onFileChange(res.filePath);
    }
        return (
        <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
            <IKUpload ref={ikUploadRef} onSuccess={onSuccess} onError={onError}   />
            <button onClick={(e)=>{
                e.preventDefault();
                if(ikUploadRef.current){
                    // @ts-ignore
                    ikUploadRef.current?.click()
                }
            }}>{file && <p>{file.filePath}</p>}</button>
            {file &&(
            <IKImage
                alt={file.filePath}
                path={file.filePath}
                width={400}
                height={200}
            />
            )}
        </ImageKitProvider>
    )
}
export default CardUpload
