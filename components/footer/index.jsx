import FooterFoot from "./footerFoot"
import FooterMain from "./footerMain"
import styles from './styles.module.scss';

const Home = () => {
    return (
        <footer className={`hidden sm:block border-t-1 border-gray-200 border-solid shadow-inner mt-5`}>
            <div className="container mx-auto ">
                <FooterMain />
                <FooterFoot />
            </div>
        </footer>
    )
}

export default Home