import Head from 'next/head'
import styles from '../../styles/Style.module.css'
import InnerBanner from '../../components/InnerBanner'
import Clients from '../../components/Clients'
import AboutSec from '../../components/AboutSec'
import ServicesSec from '../../components/ServicesSec'
import PortfolioSec from '../../components/PortfolioSec'
import Cta from '../../components/Cta'
import PackageSec from '../../components/PackageSec'
import ComboPackage from '../../components/ComboPackage'
import LeaderShipSec from '../../components/LeaderShipSec'
import TestimonialSec from '../../components/TestimonialSec'
import ContactSec from '../../components/ContactSec'


const Logo3D =()=> {
  return (
    <main className={styles.Logo3DPage}>
      <Head>
        <title>Rank Logo</title>
        <meta name="description" content="Generated by create next app" />  
      </Head>

      <InnerBanner
        BackgroundImage= "url(./assets/banner/1.jpg)"
        Title= "RankLogo provides the best website designing services in Pakistan."
        Para= "If you need to grow your brand and your business rapidly, you should take our website designing services."
        ListItem01= "Customized"
        ListItem02= "Efficient"
        ListItem03= "Unique"
        ListItem04= "Creative"
        Image01= "/assets/partners/1.png"
        Image02= "/assets/partners/2.png"
        Image03= "/assets/partners/3.png"
        ButtonDarkTitle= "Get A Design Now"
        ButtonDarkLink= "#"
        ButtonLightTitle= "+44 07927768154"
        ButtonLightLink= "tel+44 07927768154"
      />
      <Clients/>

      <AboutSec
        BackgroundImage= "url('assets/modal/8.jpg')"
        Title="Website Designing Services"
        SubTitle="We assist you in designing 
        hassle-free business websites."
        Para="RankLogo helps you take your brand online by providing unique 
        and best website designing services that can attract different 
        audiences throughout the globe. Our website design experts 
        first analyze your business and its brand image and then create 
        incredible and stunning themes for your business. 
        You don't have to worry, as we are here to create beautiful 
        websites that connect your business to your clients. Our 
        unique website designers first listen to your requirements 
        and needs and then put their expertise into your business to 
        bring the best out of it. In this way, not only are you working 
        for your business, but we also work on your business to 
        help you in leads generations and sales.
        "
        ListItem01= "3D Logo"
        ListItem02= "Abstract Logo"
        ListItem03= "Animated Logo"
        ListItem04= "Illustrative Logo"
        ListItem05= "Branding"
        ListItem06= "Website Design"
        ListItem07= "Video Animation"
        ListItem08= "Digital Marketing"
        ButtonDarkLink= "#"
        ButtonDarkTitle= "Get a Design Now"
        ButtonLightLink= "tel:+44 07927768154"
        ButtonLightTitle= "+44 07927768154"
      />
      
      <PortfolioSec WebsitePortfolio/>
      <Cta/>
      <PackageSec WebDesignPkg/>
      <ComboPackage/>
      <LeaderShipSec/>
      <TestimonialSec/>
      <ContactSec/>
    </main>
  )
}
export default Logo3D;