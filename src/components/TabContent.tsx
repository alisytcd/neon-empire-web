
import { useState } from "react"
import Shows from "./Shows"
import AboutBand from "./AboutBand"
import Music from "./Music"

type Tab = "about" | "music" | "shows"

function TabContent() {

  const [activeTab, setActiveTab] = useState<Tab>("about")

  const setTab = (tab: Tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="tabContent">
      <div className="tabButtons">
        <button onClick={() => setTab("about")}
          className={activeTab === "about" ? "active" : ""}>
          About Band
        </button>
        <button onClick={() => setTab("music")}
          className={activeTab === "music" ? "active" : ""}>
          Music
        </button>
        <button onClick={() => setTab("shows")}
          className={activeTab === "shows" ? "active" : ""}>
          Upcoming Shows
        </button>
      </div>

      {activeTab === "about" && <AboutBand />}
      {activeTab === "music" && <Music />}
      {activeTab === "shows" && <Shows />}

    </div>
  )

}

export default TabContent