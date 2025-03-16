import './style.css'

function Header() {
  return (
    <>
      <header>
        <section id="header-section">
          <img src="/site-images/logos/LittleLemonLogo.png " width="250" height="100" alt="Little Lemon logo" />
        </section>

        <nav id="header-nav">
          <a href="/">Home</a>
          <a href="/">Menu</a>
          <a href="/reserve-table">Book a table</a>
          <a href="/">About</a>
        </nav>
      </header>
    </>
  );
}

export default Header;