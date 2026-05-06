import styles from './Footer.module.css'

interface IFooterProps {
    title?: string;
}

export function Footer({title}: IFooterProps) {
    return (
    <div className={styles.div}>
        <h2 className={styles.h2}>{title}</h2>
    </div>
    );
}