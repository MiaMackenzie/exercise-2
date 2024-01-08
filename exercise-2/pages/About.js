import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Counter from "@/components/Counter"

export default function About() {
    return(
        <>

            <Header/>
            <main className={StyleSheet.main}>
                <Counter/>

            </main>
            <Footer/>
        </>
    )
}