import Image from "next/image"
import pic from '../../public/city.jpg'
const Form =()=>{
    return(
        <div>
            <h1>hello</h1>
            <Image src='/city.jpg' layout="intrinsic" width={900} height={650}/>
            <Image src={pic} layout="responsive" width={500} height={350}/>

        </div>
    )
}

export default Form