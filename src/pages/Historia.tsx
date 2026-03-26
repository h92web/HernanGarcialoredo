import { Link } from 'react-router-dom';
import styles from './Historia.module.css';

const Historia = () => {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>← Volver</Link>
            <h1 className={styles.title}>Historia</h1>

            <div className={styles.header}>
                <img
                    src="https://github.com/h92web.png"
                    alt="Hernán Garcialoredo"
                    className={styles.profilePic}
                />
            </div>

            <section className={styles.content}>
                <p className={styles.text}>
                    Mi fascinación por la tecnología empezó en 2004, a los 12 años, cuando llegó mi primera computadora. Sin internet, mi pasatiempo era explorar el sistema de archivos y entender cómo funcionaba cada documento por dentro.
                </p>

                <p className={styles.text}>
                    A los 14, ya conectado, descubrí el desarrollo web de forma autodidacta: copiaba códigos fuente, los modificaba a mi gusto y los subía a servidores gratuitos. Mi primera "estrategia de marketing" fue repartir papelitos con la URL a mis compañeros de escuela. En esa época también experimenté con animación 2D y contenido humorístico.
                </p>

                <p className={styles.text}>
                    Durante los años siguientes me volqué a la producción musical y al software, siempre bajo la metodología de prueba y error. Me divertía modificando variables de videojuegos para alterar su comportamiento, una curiosidad constante por tocar las entrañas de los sistemas.
                </p>

                <p className={styles.text}>
                    El punto de inflexión fue en 2018. Decidí estudiar en serio, pero no tenía internet en casa. Me iba a puntos de WiFi público a descargar manuales en el teléfono móvil, los pasaba a la computadora y transcribía todo a papel para fijar el conocimiento.
                </p>

                <p className={styles.text}>
                    Esa base me permitió entrar en 2022 a una startup, donde me desarrollé profesionalmente abarcando múltiples habilidades técnicas. Hoy sigo con la misma mentalidad: buscar la mejora constante y mantenerme actualizado en un ecosistema que nunca frena.
                </p>
            </section>
        </div>
    );
};

export default Historia;