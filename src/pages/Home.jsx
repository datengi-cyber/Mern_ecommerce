import HeroSection from "../components/HeroSection"
import Recommended from "../components/Recommended"
import Discounted from "../components/Discounted"
import { datas } from "../Api"
import Cards from "../components/Cards"

export default function Home() {
    return (
        <>
            <HeroSection />
            <Recommended datas={datas} Cards={Cards} />
            <Discounted datas={datas} Cards={Cards} />
            
        </>
    )
}