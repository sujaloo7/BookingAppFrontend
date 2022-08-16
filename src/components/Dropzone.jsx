import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function Dropzone() {

    const onDrop = useCallback(acceptedFiles => {
        alert(acceptedFiles[0].name)
        console.log("Now you can do anything with" +
            " this file as per your requirement")
    }, [])

    const { getInputProps, getRootProps } = useDropzone({ onDrop })

    return (
        <div className="text-center p-5 mt-4" style={{ display: 'block', width: "100% ", padding: "30", border: "3px dashed #f1592a" }}>

            <div  {...getRootProps()}  style={{width: "100% "}}>
                <input {...getInputProps()} />
                <AiOutlineCloudUpload size={30} style={{ color: "#f1592a" }} />
                <p style={{ color: "#f1592a" }}> Click here or drop files to upload</p>

            </div>
        </div>
    );
}