import SpecialsCard from "./SpecialsCard";
import "./style.css"

function Specials() {
  return (
    <>
      <main id="specials-main">
        <h2 id="specials-h2">This is a Specials</h2>
        <section id="specials-section">
          <SpecialsCard
            image="/site-images/greek salad.jpg"
            name="Greek salad"
            price="$8.00"
            description="
            Taste our Little lemon special greek salad,
            made with pure love for italian foods!"
          />

          <SpecialsCard
            image="/site-images/lemon dessert.jpg"
            name="Lemon Desser"
            price="$6.00"
            description="
              This comes straight from grandma's recipe book,
              every last ingredient has been sourced and is
              as authentic as can be imagined!"
          />

          <SpecialsCard
            image="/site-images/restauranfood.jpg"
            name="Hot dogs"
            price="$4.00"
            description="
            Some great tasting hot dogs, even though not Italian,
            They are made with Italian twist"
          />
        </section>
      </main>
    </>
  );
}

export default Specials;