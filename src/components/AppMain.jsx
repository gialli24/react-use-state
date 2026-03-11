import { useState } from "react"

export default function AppMain({ tabsData }) {

    const tabs = useState(tabsData[0]);
    const [openTab, setTab] = tabs;

    return (
        <>
            <main>
                <section className="tabs">
                    <div className="container">
                        <nav>
                            {
                                tabsData.map(tab => (
                                    <button key={tab.id} onClick={() => setTab(tab)} className={openTab.id === tab.id ? "btn active" : "btn primary"}>{tab.title}</button>
                                ))
                            }
                        </nav>

                        <div className="tab-content">
                            <h1>{openTab.title}</h1>
                            <p>
                                {openTab.description}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}