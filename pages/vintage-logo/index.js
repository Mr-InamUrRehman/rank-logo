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
        BackgroundImage= "url(./assets/banner/14.jpg)"
        Title= "We create a vintage logo for your business."
        Para= "Businesses in this corporate world are using the vintage Logo to charm brand identity."
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
        BackgroundImage= "url('assets/modal/7.jpg')"
        Title="Vintage Logo"
        SubTitle="RankLogo provides with the best vintage logos and assist you in choosing the most suitable for your business."
        Para="Businesses in this corporate world are using the vintage 
        Logo to charm brand identity. If you want a vintage logo 
        and don't know which one would be more suitable and 
        reliable for your business, our expert logo designers can 
        help you with that. We can't deny the fact that the vintage 
        Logo is also used as a robust brand strategy. The businesses 
        that use the vintage Logo for so many years are not 
        changing it, as people recognize them by their Logo only,
         and it also helps attract more customers."
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
      
      <PortfolioSec VintageLogo />
      <Cta/>
      <PackageSec LogoDesignPkg/>
      <ComboPackage/>
      <LeaderShipSec/>
      <TestimonialSec/>
      <ContactSec/>
    </main>
  )
}
export default Logo3D;