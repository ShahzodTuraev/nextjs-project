import Head from 'next/head'
import style from '../styles/Test.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title >next Project</title>
      <meta name ="tutorial" content='this project run in Next Js only to study the framework'></meta>
    </Head>
    <div >
      <h1 className={style.title}>HOME</h1>
      
      <ul>
        <li>
          <Link href='/post/blok'>
            Blok
          </Link>
        </li>
      </ul>

    </div>
    </>
      
  )
}
