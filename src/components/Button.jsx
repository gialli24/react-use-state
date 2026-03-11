export default function Button({ lang, selected, handleOnClick }) {
    return (
        <button onClick={() => handleOnClick(lang)} className={selected ? (selected.id == lang.id ? "active" : "primary") : "primary"}>
            {lang.title}
        </button>
    )
}