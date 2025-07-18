import './App.css'
import {useEffect, useState} from "react";

function App() {
  const [services, setServices ] = useState([]);

  useEffect(() => {
    async function recupereServices() {
      const response = await fetch(`${import.meta.env["VITE_BACKEND_URL"]}/api/services`);

      const services = await response.json();

      setServices(services);
    }

    recupereServices();
  }, []);

  return (
    <>
      <h1>Catalogue des services</h1>
      <p>Vous trouverez ici l'ensemble des services référencées, la documentation associée et les modalités de souscription.</p>

      <div id="catalogue">
        <h2>APPRENTISSAGE</h2>
        <div id="conteneur-carte-service">
          {services.map((service, index) =>
            <div className="carte-service" key={index}>
              <img src={service.miniature} alt={`miniature du servive ${service.nom}`}/>
              <h3>{service.nom}</h3>
              <p className="version">{service.version}</p>
              <p>{service.description}</p>
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default App;
