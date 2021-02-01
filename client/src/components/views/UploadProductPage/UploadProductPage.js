import React, {useState} from 'react';
import Title from "antd/es/skeleton/Title";
import Form from "antd/es/form";
import Input from "antd/es/input";
import {price} from "../LandingPage/Sections/Datas";
import FileUpload from "../../utils/FileUpload";
const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]
const UploadProductPage = () => {
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [continent, setContinent] = useState('');

    const titleChangeHandler=(e)=>{
        setTitle(e.currentTarget.value)
    };

    const descriptionChangeHandler=(e)=>{
        setTitle(e.currentTarget.value)
    };

    const priceChangeHandler = (e)=>{
        setPrice(e.currentTarget.value)
    };

    const continentChangeHandler = (e)=>{
        setContinent(e.currentTarget.value)
    };

    const submitHandler = () =>{

    }

    const updateImges = () =>{

    }

    return (
        <div>
            <div>
                <Title>
                    여행 상품 업로드
                </Title>
            </div>
            <Form onSubmit={submitHandler}>
                {/*DeopZone*/}
                <FileUpload refreshFunction={updateImges}/>
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={title}/>
                <br/>
                <br/>
                <label>설명</label>
                <Input onChange={descriptionChangeHandler} value={description}/>
                <br/>
                <br/>
                <label>가격</label>
                <Input tpye='number' onChange={priceChangeHandler} value={price}/>
                <br/>
                <br/>
                <select onChange={continentChangeHandler} value={continent}>
                    {Continents.map(item =>(
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
            </Form>
        </div>
    );
};
export default UploadProductPage;