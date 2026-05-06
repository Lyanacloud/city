import styles from "./Header.module.css"
interface IHeader {
    title?: string;
    img?: string;
    text?: string;
}
export const Header = (props:  IHeader) => {
    return (
    <div className={styles.div}>
        <img src={props.img} alt='' className={styles.img} />
        <div className={styles.overlay}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    )
}