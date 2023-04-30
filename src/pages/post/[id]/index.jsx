import Link from "next/link"
import { useRouter } from "next/router"
import Home from '../../index'
const Post = () => {
    const router = useRouter();
    const [id] = router.query
  return (
    <div>
      <Home/>
      <h1>Post: {id}</h1>
      <ul>
        <li>
            <Link href='post/[id]/[blok]' as={`/post/${id}/1`}>
                <a>Blok 1</a>
            </Link>
        </li>
        <li>
            <Link href='post/[id]/[blok]' as={`/post/${id}/2`}>
                <a>Blok 2</a>
            </Link>
        </li>
        <li>
            <Link href='post/[id]/[blok]' as={`/post/${id}/3`}>
                <a>Blok 3</a>
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Post
