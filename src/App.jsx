import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header title="Adopta un Perrito"/>
      <div className='cards'>
        <MyCard src="src\assets\imgs\dog-3277416_1280.jpg" name="Canela" description="Soy una perrita de dos años de vida. Estoy vacunada y estirilizada. Soy grande y muy juguetona, por lo que busco un hogar que pueda cumplir con mis necesidades para sentirme muy cómoda. Mi familia ideal es una familia outdoor, que le guste salir a pasear, trotar y hacer deporte" color="primary" race="Gran Danés"/>
        <MyCard src="src\assets\imgs\puppy-1047521_1280.jpg" name="Pintita" description="Soy una pequeñita de 4 meses, busco un hogar donde me quieran y me mimen. Tuve un accidente donde perdí mi patita de atrás y al parecer por eso la gente no quiere adoptarme. Pero quiero ser feliz con una familia que me quiera." color="secondary" race="American Pitbull Terrier"/>
        <MyCard src="src\assets\imgs\puppy-1207816_1280.jpg" name="Perezoso" description="Hola, mi nombre es perezoso y quiero que me adoptes por que seré tu amigo fiel. Soy muy cariñoso y juguetón y además me encantan los niños." color="warning" race="Golden"/>
        <MyCard src="src\assets\imgs\puppy-1903313_1280.jpg" name="Lucas" description="Soy un cachorrito con menos de 6 meses de vida. Me rescataron de una carretera donde estuvieron a punto de atropellarme. Soy muy flojito y me encanta jugar. Busco una familia que me quiera y proteja." color="success" race="Labrador"/>
      </div>
      <Footer/>      
    </>
  );
}

export default App;
