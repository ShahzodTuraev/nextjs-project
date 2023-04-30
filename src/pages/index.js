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
    <div className={style.box}>
      <h1 className={style.title}>hello</h1>
      <p className={style.note}>This is new project</p>
      <ul>
        <li>
          <Link href='/post/blok'>
          <a>Blog</a>
          </Link>
        </li>
      </ul>

    </div>
    </>
      
  )
}
