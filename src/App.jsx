import { useState } from "react"
import Search from "./components/Search"

const App = () => {
  const [searchTerm, setSearchTerm] = useState('i am kristen')
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="banner" />
          <h1>Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy Without the Hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}
export default App