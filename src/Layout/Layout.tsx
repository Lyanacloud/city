import type {ReactNode} from "react";
import styles from "./Layout.module.css"

interface ILayout{
    title?: string;
    description?: string;
    children?: ReactNode;
    img?: string;
    anchor?: string
}

export function Layout(props: ILayout ) {
    return (
    <div className={styles.div}>
        <div>
            <h2 className={styles.h2} id={props.anchor}>{props.title}</h2>
        </div>
        <div className={styles.withPhoto}>
            <p style={{whiteSpace: 'pre-line'}}>{props.description}</p>
            <img src={props.img} alt="" className='icon'/>
        </div>
       <div className={styles.divModal}>{props.children}</div>
    </div>
    )
}