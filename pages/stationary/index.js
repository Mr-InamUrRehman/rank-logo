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
        BackgroundImage= "url(./assets/banner/12.jpg)"
        Title= "Our stationery designs are professional and customized"
        Para= "If you require impressive and eye-catching design for your business, our expert stationery designers can help you."
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
        BackgroundImage= "url('assets/modal/5.jpg')"
        Title="Stationary Designing Services"
        SubTitle="Our stationary designing services are cost-effective for all businesses"
        Para="If you are looking for the best stationery designs for 
        your business in Pakistan, then you have come to the 
        right place. Innovations play an essential role in doing 
        so. At RankLogoh, we offer stationery designing services 
        at affordable prices, and our graphic designers' experts 
        know the value of time, so they deliver your designs 
        on time. RankLogo is bringing an innovative change in 
        designing services by creating unique and impressive 
        designs. From the logo designing services to every design, 
        we have expertise in giving you each and every design 
        best according to your business requirements. 
        We create stunning and innovative designs for your 
        business, leave a long-lasting and impressive impact 
        on your customers, and convert your visitors into loyal customers."
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
      
      <PortfolioSec Stationary/>
      <Cta/>
      <PackageSec StationaryDesign/>
      <ComboPackage/>
      <LeaderShipSec/>
      <TestimonialSec/>
      <ContactSec/>
    </main>
  )
}
export default Logo3D;