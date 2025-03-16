import './style.css'

function Jumbo() {
  return (
    <main id="jumbo-main">
      <section id="jumbo-section">
        <article id="jumbo-article">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a cozy Italian restaurant known for its authentic flavors and warm atmosphere.
            Nestled in the heart of the city, it serves classic dishes like handmade pasta, wood-fired pizzas, and rich tiramisu.
            With fresh ingredients and a touch of Mediterranean charm, every meal at Little Lemon feels like a taste of Italy.
          </p>
        </article>
        <div id="jumbo-img-container">
          <img id="jumbo-img" src="/site-images/restaurant chef B.jpg" alt="Mario and Adrian" />
        </div>
        <a href="/reserve-table">
          <button id="book-a-table">Book a table</button>
        </a>
      </section>
    </main>
  );
}

export default Jumbo;