import styles from "./Modal.module.css"
import {useState} from "react";
type ModalProps = {
    type: "monument" | "factory" | "rest"
    title: string,
    src?: string,
    shortDescription?: string
    fullDescription?: string
}

export function Modal ({type, title, src, shortDescription,fullDescription}: ModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentClass = type === "factory" ? styles.divFactory : type === "rest" ? styles.divRest : styles.divMonument;
    return (
            <>
            <div className={contentClass} onClick={() => setIsOpen(true)}>
                <img src={src} alt='' />
                <div>
                    <h4>{title}</h4>
                    <p>{shortDescription}</p>
                </div>
            </div>
            {isOpen && (
                <div className={styles.overlay} onClick={() => setIsOpen(false)}>
                    <div className={styles.openModal} onClick={(e) => e.stopPropagation()}>
                        <img src={src} alt='' />
                        <div>
                            <h4>{title}</h4>
                            <p>{fullDescription || "Подробное описание отсутствует"}</p>
                        </div>
                    </div>
                </div>
            )}
            </>
        )

}