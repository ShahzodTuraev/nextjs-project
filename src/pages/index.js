import Head from 'next/head'
import style from '../styles/Test.module.css'

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
    </div>
    </>
      
  )
}
