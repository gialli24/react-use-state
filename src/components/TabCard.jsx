export default function TabCard({ title, description }) {
    return (
        <div className="tab-content">
            {
                <>
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                </>
            }
        </div>
    )
}