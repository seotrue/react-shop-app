import React, {useState} from 'react';
import Title from "antd/es/skeleton/Title";
import Form from "antd/es/form";
import Input from "antd/es/input";
import {price} from "../LandingPage/Sections/Datas";

const UploadProductPage = () => {
    const [title,setTitle] = useState('');
    const [description, setdescription] = useState('');

    const titleChangeHandler=(e)=>{
        setTitle(e.currentTarget.value)
    }

    const descriptionChangeHandler=(e)=>{
        setTitle(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <Title>
                    여행 상품 업로드
                </Title>
            </div>
            <Form>
                {/*DeopZone*/}
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={title}/>

                <label>설명</label>
                <Input onChange={descriptionChangeHandler} value={description}/>

                <label>가격</label>
                <Input tpye='number' onChange={priceChangeHandler} value={price }/>
            </Form>
        </div>
    );
};
export default UploadProductPage;