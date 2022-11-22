import style from './card.module.scss';

function Card(props) {
    return (

        <div className={style.hero_card}>
            <img src={props.img} alt={props.id} className="img" />
            <h2 className={style.id}>{props.id}</h2>
            <h3 className={style.quote}>{props.quote}</h3>
            <div className={style.alterego}><span>Альтерэго:</span> {props.alterego}</div>
            <div className={style.universe}><span>Вселенная:</span> {props.universe}</div>
            <div className="occupation item_info"><span>Род занятий:</span> {props.occupation}</div>
            <div className="ally item_info"><span>Союзники:</span> {props.ally}</div>
            <div className="enemy item_info"><span>Враги:</span> {props.enemy}</div>
            <div className="powers item_info"><span>Суперспособности:</span> {props.powers}</div>
            <div className="info item_info"><span>Подробнее:</span> {props.info}</div>
        </div>

    );
}

export default Card;