import Home from '../../index'
import { useRouter } from 'next/router'


const Blok = () => {
    const router = useRouter();
    const {id, blok} = router.query
  return (
    <div>
      <Home/>
      <h1>Post: {id}</h1>
      <h2>Blok: {blok}</h2>
    </div>
  )
}

export default Blok
