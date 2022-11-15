import '../../style/Card.css';

function Card(props) {
    return (
        <div className="hero-card">
            <img src={props.img} alt={props.id} className="img" />
            <h2 className="id">{props.id}</h2>
            <h4 className="quote">{props.quote}</h4>
            <div className="alterego">{props.alterego}</div>
            <div className="universe">{props.universe}</div>
            <div className="occupation">{props.occupation}</div>
            <div className="ally">{props.ally}</div>
            <div className="enemy">{props.enemy}</div>
            <div className="powers">{props.powers}</div>
        </div>
    );
}

export default Card;