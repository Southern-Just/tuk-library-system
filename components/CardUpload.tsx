'use client'

import React, {useRef, useState} from 'react'
import { IKImage,  ImageKitProvider, IKUpload } from "imagekitio-next";

import config from "@/lib/config";
import ImageKit from "imagekit";
const {
    env:{
        imagekit:{publicKey,urlEndpoint},
    },
} = config;

const imagekit = new ImageKit({publicKey, urlEndpoint});
const CardUpload = () => {

    const ikUploadRef = useRef(null)
    const [file, setFile] = useState(null)

    const onError()=>{}
    const onSuccess()=>{}
    return (
        <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint}>
            <IKUpload ref={ikUploadRef} onError={onError} onSuccess={onSuccess}/>
            <button onClick={(e)=>{
                e.preventDefault();
                if(ikUploadRef.current){
                    ikUploadRef.current?.click()
                }
            }}>upload</button>
        </ImageKitProvider>
    )
}
export default CardUpload
