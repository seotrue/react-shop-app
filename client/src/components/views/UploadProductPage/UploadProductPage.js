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
    const [Images, setImages] = useState('');

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
        if (!Title || !Description || !Price || !Continent || Images.length === 0) {
            return alert(" 모든 값을 넣어주셔야 합니다.")
        }
        const body = {
            //로그인 된 사람의 ID
            writer: props.user.userData._id,
            title: Title,
            description: Description,
            price: Price,
            images: Images,
            continents: Continent
        }

        Axios.post('/api/product', body)
            .then(response => {
                if (response.data.success) {
                    alert('상품 업로드에 성공 했습니다.')
                    props.history.push('/')
                } else {
                    alert('상품 업로드에 실패 했습니다.')
                }
            })
    }

    // submit 시에 넘겨야 할 정보가 부모 컴포넌트에 잇어야 하므로 해당 정보를 프랍스로 내려준다.
    const updateImges = () =>{
        setImages(newImages)
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2> 여행 상품 업로드</h2>
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