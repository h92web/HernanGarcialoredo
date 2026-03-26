import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRepositories, getProjectImageUrl, type Repo } from '../services/github';
import styles from './Portfolio.module.css';

const Portfolio = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const loadRepos = async () => {
            const data = await getRepositories();
            setRepos(data);
        };
        loadRepos();
    }, []);

    const handleImgError = (id: number) => {
        setImgErrors(prev => ({ ...prev, [id]: true }));
    };

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>← Volver</Link>
            <h1 className={styles.title}>Proyectos</h1>
            <div className={styles.grid}>
                {repos.map(repo => (
                    <article key={repo.id} className={styles.card}>
                        {!imgErrors[repo.id] && (
                            <img
                                src={getProjectImageUrl(repo.name)}
                                alt={repo.name}
                                className={styles.projectImage}
                                onError={() => handleImgError(repo.id)}
                            />
                        )}
                        <div className={styles.content}>
                            <h3 className={styles.projectName}>{repo.name.replace(/-/g, ' ')}</h3>
                            <p className={styles.description}>
                                {repo.description || ""}
                            </p>
                            <div className={styles.footer}>
                                <span className={styles.lang}>{repo.language || 'Code'}</span>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    Ver Código →
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;