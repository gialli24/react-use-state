import { useState } from "react"

export default function AppMain({ tabsData }) {

    const tabs = useState(null);
    const [openTab, setTab] = tabs;

    return (
        <>
            <main>
                <section className="tabs">
                    <div className="container">
                        <nav>
                            {
                                tabsData.map(tab => (
                                    <button key={tab.id} onClick={() => setTab(tab)} className={openTab && openTab.id === tab.id ? "btn active" : "btn primary"}>{tab.title}</button>
                                ))
                            }
                        </nav>

                        <div className="tab-content">
                            <h1>{openTab && openTab.title || ""}</h1>
                            <p>
                                {openTab && openTab.description || "Nessun linguaggio selezionato"}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}