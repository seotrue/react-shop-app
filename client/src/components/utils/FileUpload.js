import React, {useState} from 'react';
import Dropzone from "react-dropzone";

const FileUpload = props => {
    const [imgages, setImages] = useState([])
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <div style={{
                        width: 300, height: 240, border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                )}
            </Dropzone>
        </div>
    );
};



export default FileUpload;