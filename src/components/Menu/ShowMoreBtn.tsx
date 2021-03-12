import classNames from 'classnames'
import styles from './menu.module.scss'

interface Props {
    text: string
}

export default function ShowMoreBtn({ text }: Props) {
    return (
        <button type="button" className={styles.item}>
            <i className={classNames(styles.fontIcon, "material-icons")}>expand_more</i>
            <span className="menu__text">{text ?? "Show More"}</span>
        </button>
    )
}
