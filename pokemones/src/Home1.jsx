import imagen from "../src/assets/img/profesorOak.png"
const Home = () => {
  return (
    <div className="home">
      <h1 className="p-5">Bienvenido Maestro Pokemón</h1>
      <div>
        <img src={imagen} alt="" />
      </div>
      <p className="p-5">
        En este sitio encontrarás toda la información necesaria para aprender
        sobre los pokemones y ayudarte a enfrentar cada batalla.
      </p>
    </div>
  );
};

export default Home;