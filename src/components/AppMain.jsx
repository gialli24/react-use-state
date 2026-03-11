import { useState } from "react"
import Button from "./Button";

export default function AppMain({ languages }) {

    const [selected, setSelected] = useState(null);

    return (
        <>
            <main>
                <section className="tabs">
                    <div className="container">
                        <nav>
                            {
                                languages.map(lang => (
                                    <Button key={lang.id} lang={lang} selected={selected} handleOnClick={setSelected} />
                                ))
                            }
                        </nav>


                    </div>
                </section>
            </main >
        </>
    )
}