import "bulma/css/bulma.min.css";
import "./App.css";
import Navbar from "./Navbar/Navbar";

function App() {
  return (<div>
    <section className="header">
      <Navbar />
      <div class="tile is-ancestor">
        <div class="tile is-3 "></div>

        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child">
            <p class="title brand-description box">
              INDUMENTARIA PARA INFANCIAS LIBRES
            </p>
          </div>
          <div class="tile is-child">
            <p class="title brand-description box">
              Nuestras prendas LIBERI estan pensadas desde la libertad, el amor
              y lo ludico. Creemos en las infancias múltiples, diversas,
              singulares, creativas, y sobre todo, coloridas. Lo propio de las
              infancias es la invención y creación, por eso apostamos a la
              construcción de un nuevo paradigma donde abunden las posibilidades
              de expresión para nuestrxs niñxs
            </p>
          </div>
        </div>

        <div class="tile is-3 "></div>
      </div>
      ;
    </section>
    <section className="products">
      
    </section>
    </div>
  );
}

export default App;
