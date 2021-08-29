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
        Title= "Website presence is an essential factor in the online presence of your brand. "
        Para= "RankLogo is here to develop your website according to your business requirements and make your online presence robust."
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
        Title="Website Development Services"
        SubTitle="Our experienced team of website developers
        know how to take business to the next level."
        Para="RankLogo builds stunning and innovative websites that 
        value your business and speak your brand most 
        appropriately. We add creativity, excellence, and skills 
        to make your website that would be suitable for your 
        business requirements. Our professional website 
        developers have expertise in technology and ensure 
        that your website is made user-friendly and speedy 
        one which helps you convert visitors into loyal 
        customers. Our website developers build the 
        website for your brand and ensure the success 
        of your business online. We are here to build 
        an impressive and stunning website for your business.         
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