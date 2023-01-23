import { NextPage } from "next";
import Image from "next/image";
import DogImage from '../public/images/dog.jpg'

const ImageSample: NextPage<void> = (props) =>{
    return (
        <div>
            <h1>画像</h1>
            <p><img src="/images/dog.jpg"/></p>
            <p><Image src={DogImage} alt="Dog" layout="responsive" /></p>
        </div>
    )
}

export default ImageSample