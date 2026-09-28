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
                    Mi interés por la tecnología comenzó en 2004 con la llegada de mi primera computadora. Al no contar con conexión a internet, me dedicaba a explorar el sistema de archivos y analizar el funcionamiento interno de cada documento.
                </p>

                <p className={styles.text}>
                    A los 14 años aprendí desarrollo web de forma autodidacta: analizaba códigos fuente, los modificaba y los subía a servidores gratuitos. Para difundir mis sitios, repartía notas con la dirección web entre mis compañeros de escuela. Durante esa etapa también realicé proyectos de animación 2D y contenido multimedia.
                </p>

                <p className={styles.text}>
                    En los años siguientes me enfoqué en la producción musical y la manipulación de software mediante experimentación directa. Solía modificar archivos de configuración en videojuegos para alterar sus parámetros y comprender la lógica detrás de cada sistema.
                </p>

                <p className={styles.text}>
                    En 2018 profundicé de manera sistemática en la programación. Ante la falta de internet en mi domicilio, concurría a puntos de WiFi público para descargar documentación en el teléfono móvil, transferirla a la computadora y transcribir los conceptos clave a papel para fijar el aprendizaje.
                </p>

                <p className={styles.text}>
                    Esa formación me permitió incorporarme en 2022 a una startup, donde adquirí experiencia en entornos de producción real. Actualmente mantengo el mismo enfoque orientado al aprendizaje continuo y a la resolución de problemas técnicos.
                </p>
            </section>
        </div>
    );
};

export default Historia;

```
