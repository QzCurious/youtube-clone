export default function ShowMoreBtn({ text }) {
    return (
        <button type="button" className="menu__item">
            <i className="menu__img material-icons">expand_more</i>
            <span className="menu__text">{text ?? "Show More"}</span>
        </button>
    )
}
