import styles from './Navigation.module.css'

export type link = {
    href: string,
    text: string,
}

interface NavigationProps {
    links: link[],
    icon: string,
}

export function Navigation ({ links, icon }: NavigationProps) {
    return (
    <div className={styles.div}>
        <img src={icon} alt="Navigation icon" />
        <div className={styles.links}>
            {links.map((link) => (
                <a href={link.href}>{link.text}</a>
            ))}
        </div>
    </div>
    )
}