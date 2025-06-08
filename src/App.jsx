import React, { useState } from "react"
import Document from "./components/Document.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {

  const [activeDoc, setActiveDoc] = useState("gdocs")

  return (
    <>
      <Navbar activeDoc={activeDoc} setActiveDoc={setActiveDoc}/>
      <Document activeDoc={activeDoc}/>
    </>
  )
}

export default App
