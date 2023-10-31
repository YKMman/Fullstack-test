import { FC } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Search from "./components/Search"
import Sort from "./components/Sort"
import Table from "./components/Table"

const App:FC = ():JSX.Element => {

  return (
    <div className="min-h-full flex flex-col overflow-x-hidden">
      <Header/>
        <main className="flex-auto">
            <Search/>
            <Sort/>
            <Table/>
        </main>
      <Footer/>
    </div>
  )
}

export default App




