import style from './card.module.scss';

function Card(props) {
    return (

        <div className={style.hero_card}>
            <img src={props.img} alt={props.id} className="img" />
            <h2 className={style.id}>{props.id}</h2>
            <h3 className={style.quote}>{props.quote}</h3>
            <div className={style.item_info}><span>Альтерэго:</span> {props.alterego}</div>
            <div className={style.item_info}><span>Вселенная:</span> {props.universe}</div>
            <div className={style.item_info}><span>Род занятий:</span> {props.occupation}</div>
            <div className={style.item_info}><span>Союзники:</span> {props.ally}</div>
            <div className={style.item_info}><span>Враги:</span> {props.enemy}</div>
            <div className={style.item_info}><span>Суперспособности:</span> {props.powers}</div>
            <div className={style.item_info}><span>Подробнее:</span> {props.info}</div>
        </div>

    );
}

export default Card;