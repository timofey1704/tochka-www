import About from './components/MainPage/About'
import Favors from './components/MainPage/Favors'
import Customers from './components/MainPage/Customers'

export default function Home() {
  return (
    <div className="pt-24">
      <About />
      <Favors />
      <Customers />
    </div>
  )
}
