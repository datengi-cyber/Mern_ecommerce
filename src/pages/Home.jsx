import HeroSection from "../components/HeroSection"
import Recommended from "../components/Recommended"
import Discounted from "../components/Discounted"
import { datas } from "../Api"
import Cards from "../components/Cards"
import FAQ from "../components/Faq"

export default function Home() {
    return (
        <>
            <HeroSection />
            <FAQ/>

            <Recommended datas={datas} Cards={Cards} />
            <Discounted datas={datas} Cards={Cards} />
            
        </>
    )
}