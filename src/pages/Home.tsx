import Header from "../components/header/Header.tsx";
import Body from "../components/body/Body.tsx";
import Footer from "../components/footer/Footer.tsx";
import styles from "./Home.module.scss";

function Home(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>

            <div className={styles.body}>
                <Body/>
            </div>

            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )

}
export default Home;