import "./style.css"

function SpecialsCard( props ) {
    return (
      <>
        <main id="special-card-container">
          <img src={props.image} alt="Salad"/>
          <h4 id="special-card-h4">{props.name}</h4>
          <h5 id="special-card-h5">{props.price}</h5>
          <p id="special-card-p">
            {props.description}
          </p>

        </main>
      </>
    );
  }
  
  export default SpecialsCard;