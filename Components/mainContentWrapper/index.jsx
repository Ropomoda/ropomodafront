import styles from './styles.module.scss';

function Home({ children }) {
    return (
        <main id="main-content-wrapper" className={`${styles["main-content-wrapper"]}`}>
            <div className='container mx-auto'>
                {children}
            </div>
        </main>
    )
}
export default Home;
