
import './App.css'
import Card from './components/Card'
import Card_Plus from './components/Card_Plus'
import Card_Pro from './components/Card_Pro'

function App() {
  
  return (
    <>
    <div className='border'>
      <Card category="FREE" dollar="0"/>
      <Card_Plus category="PLUS" dollar="9"/>
      <Card_Pro category="PRO" dollar="49"/>
    </div>
    </>
  )
}

export default App
