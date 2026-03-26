import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.title}>Hernán Garcialoredo</h1>

            <nav className={styles.navGrid}>
                <Link to="/curriculum" className={styles.card}>
                    <h2>Curriculum</h2>
                    <p>Experiencia y formación</p>
                </Link>

                <Link to="/portfolio" className={styles.card}>
                    <h2>Portfolio</h2>
                    <p>Mis proyectos recientes</p>
                </Link>

                <Link to="/historia" className={styles.card}>
                    <h2>Mi Historia</h2>
                    <p>Sobre mi trayectoria</p>
                </Link>
            </nav>
        </div>
    );
};

export default Home;