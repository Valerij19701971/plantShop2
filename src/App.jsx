import TopBanner from './Components/TopBanner'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Title from './Components/Title'


function App() {


  return (
    <div>
      <TopBanner />
      <Header />
      <Hero />
      <Title text1 = 'Shop ' text2 = 'by Category' showLink = {true} />
    </div  >
  )
}

export default App
