import Head from 'next/head'
import styles from '../../styles/Style.module.css'
import ContactSec from '../../components/ContactSec'
import BannerGlobal from '../../components/BannerGlobal'

const Contact =()=> {
  return (
    <main className={[styles.InnerPage]+" "+[styles.ContactPage]}>
      <Head>
        <title>Contact Us | Rank Logo</title>
        <meta name="description" content="Generated by create next app" />  
      </Head>

      <BannerGlobal
      BackgroundImage= "url(./assets/banner/5.jpg)"
      Title= {<>Have A Query? <br/> We Are Here To Discuss It!</>}
      Para= "Our team is here if you have any query or question to ask. Feel free to give us a call, send us an e-mail or start chatting now with our support representative. We are available 24 hours a day, 7 days a week."
      />
      <ContactSec/>
    </main>
  )
}
export default Contact;