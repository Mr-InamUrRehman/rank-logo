import Head from 'next/head'
import styles from '../../styles/Style.module.css'
import Clients from '../../components/Clients'
import PortfolioSec from '../../components/PortfolioSec'
import Cta from '../../components/Cta'
import LeaderShipSec from '../../components/LeaderShipSec'
import TestimonialSec from '../../components/TestimonialSec'
import ContactSec from '../../components/ContactSec'
import BannerGlobal from '../../components/BannerGlobal'

const Portfolio =()=> {
  return (
    <main className={[styles.InnerPage]+" "+[styles.PortfolioPage]}>
      <Head>
        <title>Portfolio | Rank Logo</title>
        <meta name="description" content="Generated by create next app" />  
      </Head>

      <BannerGlobal
      BackgroundImage= "url(./assets/banner/5.jpg)"
      Title= "Our Design Assets"
      Para= "With our command over skill, we have assisted hundreds of businesses to invent their brand personality."
      />

      <Clients/>
      <PortfolioSec TabNav PortfolioData/>
      <Cta/>
      <LeaderShipSec/>
      <TestimonialSec/>
      <ContactSec/>
    </main>
  )
}
export default Portfolio;