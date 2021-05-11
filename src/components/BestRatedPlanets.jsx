import SBestRatedPlanets from './styled/SBestRatedPlanets';

export default function Footer() {
  return (
    <SBestRatedPlanets>
      <section className="top-rated-planets">
        <div className="planet-card">
          <img className="planet-img" src="/img/earth.png" alt="earth" />
          <article className="planet-name">Planet 1</article>
        </div>
        <div className="planet-card">
          <img className="planet-img" src="/img/uranus.jpg" alt="uranus" />
          <article className="planet-name">Planet 2</article>
        </div>
        <div className="planet-card">
          <img className="planet-img" src="/img/sun.jpg" alt="sun" />
          <article className="planet-name">Planet 3</article>
        </div>
      </section>
    </SBestRatedPlanets>
  );
}
