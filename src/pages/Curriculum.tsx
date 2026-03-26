import cvData from '../data/cv.json';
import styles from './Curriculum.module.css';
import { Link } from 'react-router-dom';

const Curriculum = () => {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>← Volver</Link>

            <header className={styles.header}>
                <h1 className={styles.name}>{cvData.personal.nombre}</h1>
                <p className={styles.subtitle}>{cvData.personal.titulo} | {cvData.personal.ubicacion}</p>

                <div className={styles.contactGrid}>
                    <a href={`mailto:${cvData.personal.contacto.email}`} className={styles.contactLink}>
                        <span>✉</span> {cvData.personal.contacto.email}
                    </a>
                    <a href={`https://wa.me/${cvData.personal.contacto.telefono.replace(/\s/g, '')}`} className={styles.contactLink}>
                        <span>📞</span> {cvData.personal.contacto.telefono}
                    </a>
                    <a href={`https://linkedin.com/in/${cvData.personal.contacto.linkedin}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        <span>🔗</span> linkedin.com/in/{cvData.personal.contacto.linkedin}
                    </a>
                </div>
            </header>

            <section className={styles.section}>
                <p className={styles.profileText}>{cvData.perfil}</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <div className={styles.skillsGrid}>
                    {Object.entries(cvData.skills).map(([category, skills]) => (
                        <div key={category} className={styles.skillCategory}>
                            <h3 className={styles.categoryTitle}>{category.replace('_', ' & ')}</h3>
                            <div className={styles.techList}>
                                {skills.map((skill) => (
                                    <span key={skill} className={styles.techTag}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Experiencia Profesional</h2>
                {cvData.experiencia.map((exp, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.itemHeader}>
                            <span className={styles.itemTitle}>{exp.puesto}</span>
                            <span className={styles.period}>{exp.periodo}</span>
                        </div>
                        <p className={styles.company}>{exp.empresa}</p>
                        <p className={styles.description}>{exp.descripcion}</p>
                    </div>
                ))}
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Educación y Certificaciones</h2>
                {cvData.educacion.map((ed, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.itemHeader}>
                            <span className={styles.itemTitle}>{ed.titulo}</span>
                            <span className={styles.period}>{ed.estado}</span>
                        </div>
                        <p className={styles.institution}>{ed.institucion}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Curriculum;