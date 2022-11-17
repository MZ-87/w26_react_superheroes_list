import '../../style/Card.css';

function Card(props) {
    return (

        <div className="hero-card">
            <img src={props.img} alt={props.id} className="img" />
            <h2 className="id">{props.id}</h2>
            <h3 className="quote">{props.quote}</h3>
            <div className="alterego item-info"><span>Альтерэго:</span> {props.alterego}</div>
            <div className="universe item-info"><span>Вселенная:</span> {props.universe}</div>
            <div className="occupation item-info"><span>Род занятий:</span> {props.occupation}</div>
            <div className="ally item-info"><span>Союзники:</span> {props.ally}</div>
            <div className="enemy item-info"><span>Враги:</span> {props.enemy}</div>
            <div className="powers item-info"><span>Суперспособности:</span> {props.powers}</div>
            <div className="info item-info"><span>Подробнее:</span> {props.info}</div>
        </div>

    );
}

export default Card;