import React, {useState} from 'react';
import Dropzone from "react-dropzone";
import axios from 'axios';

const FileUpload = props => {
    const [Images, setImages] = useState([]);
    const dropHandler = (file) => {
        console.log(file,'file');
        let formDate = new FormData();
        const config = {
            header:{ 'content-type': 'multipart/fomr-data' }
        };
        // todo 객체인 formDate에 append로 추가가 가능하다?
        formDate.append('file',file[0])

        axios.post('/api/product/image',formDate,config)
            .then( response => {
                if (response.data.success) {
                    // 서버에서 받아온이미지 Image state에 담기
                    setImages([...Images,response.data.filePath])
                    props.refreshFunction([...Images,response.data.filePath])
                }
            }).catch(err=>{
                alert('파일을 지정하는데 실패했습니다.')
                console.log(err,'err')
            })
    };
    const deleteHandler = (img) =>{
        const currentIndex = Images.indexOf(img);
        let newImg = [...Images]
        newImg.splice(currentIndex,1)
        setImages(newImg)
        props.refreshFunction(newImg)
    }

    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <div style={{
                        width: 300, height: 240, border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>파일을 선택하세요</p>
                    </div>
                )}
            </Dropzone>
            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>
                {Images.map((image,index)=>(
                    <div onClick={() => deleteHandler(image)} key={index}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }}
                             src={`./${image}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
};



export default FileUpload;