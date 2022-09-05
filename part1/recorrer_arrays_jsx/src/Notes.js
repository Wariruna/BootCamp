
export const Note = ({ id, categories = [], content, date }) => {
    return (
        <li>
            <p>{id}</p>
            <p>{content}</p>
            <p>{date}</p>
            <p>{categories.map((category) => {
                return (
                    <strong key={category}>{category} </strong>
                )

            })}
            </p>

    </li>
    )
}