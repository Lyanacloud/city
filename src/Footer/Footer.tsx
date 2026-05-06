import styles from './Footer.module.css'

interface IFooterProps {
    src?: string | null;
    title: string;

}

export function Footer({src, title}: IFooterProps) {
    return (
    <div className={styles.div}>
        {src && <img src={src} alt=''/>}
        <h2 className={styles.h2}>{title}</h2>
    </div>
    );
}