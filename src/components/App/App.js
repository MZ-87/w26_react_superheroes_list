import React from 'react';
import Card from '../Card/Card.jsx';

import '../../style/App.css';
import '../../style/Card.css'

const heroes = [{
  id: "Бэтмен",
  alterego: "Брюс Уэйн",
  universe: "DC Comics",
  occupation: "борец с преступностью, филантроп, миллиардер",
  ally: "Робин, Бэтгерл",
  enemy: "Джокер",
  powers: "богатство, интеллект, обширные познания, знания боевых искусств, ловкость",
  quote: "I am vengeance, I am justice, I am the night. . . I AM BATMAN!",
  img: "assets/img/batman.jpg"
  },{
  id: "Супермен",
  alterego: "Кларк Кент",
  universe: "DC Comics",
  occupation: "супергерой, борец за справедливость, журналист",
  ally: "Бэтмен, Чудо-женщина",
  enemy: "Лекс Лютор",
  powers: "неуязвимость, сверхсила, полет, самоисцеление, суперзрение и суперслух",
  quote: "Dreams lift us up and transform is into something better",
  img:  "assets/img/superman.jpg"
  },{
  id: "Чудо-женщина",
  alterego: "Принцесса Диана из Темискиры",
  universe: "DC Comics",
  occupation: "принцесса амазонок, секретарь-референт",
  ally: "Бэтмен, Супермен",
  enemy: "Арес",
  powers: "cверхчеловеческая сила, скорость, выносливость, ловкость и стойкость",
  quote: "Now I know, that only love can truly save the world",
  img: "assets/img/wonderwoman.jpg"
  },{
  id: "Железный человек",
  alterego: "Тони Старк', 'Marvel Comics",
  universe: "Marvel Comics",
  occupation: "гений, миллиардер, плейбой, филантроп",
  ally: "Мстители",
  enemy: "Читаури, Танос и другие",
  powers: "высокий уровень интеллекта, широкие познания в науке и технике, широкий доступ к сверхсовременным технологиям",
  quote: "I am Iron Man",
  img: "assets/img/ironman.jpg"
  },{
  id: "Человек-паук",
  alterego: "Питер Паркер",
  universe: "Marvel Comics",
  occupation: "борец за справедливость, студент, фотограф",
  ally: "Мстители",
  enemy: "Норман Осборн, Доктор Осьминог",
  powers: "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
  quote: "With great power comes great responsibility",
  img: "assets/img/spidy.jpg"
  },{
  id: "Халк",
  alterego: "Брюс Беннер",
  universe: "Marvel Comics",
  occupation: "супергерой, борец за справедливость, ученый-биохимик",
  ally: "Железный человек, Капитан Америка",
  enemy: "Читаури, Танос и другие",
  powers: "сверхчеловеческая сила искорость, выносливость, полет",
  quote: "Hulk smash!",
  img: "assets/img/hulk.jpg"
  },{
  id: "Капитан Марвел",
  alterego: "Кэрол Денверс",
  universe: "Marvel Comics",
  occupation: "супергероиня, правительственый агент, военный летчик",
  ally: "Мстители",
  enemy: "Танос, скруллы",
  powers: "cверхчеловеческие сила, скорость, выносливость и прочность, полёт, способность поглощать и проецировать энергию",
  quote: "Higher, further, faster, baby!",
  img: "assets/img/marvel.png"
  }];


function App() {
  return (
    <div className="App">
      {
heroes.map((hero) => 
<Card  key= {hero.id} img={hero.img} id={hero.id} quote={hero.quote} alterego={hero.alterego} universe={hero.universe} occupation={hero.occupation} ally={hero.ally} enemy={hero.enemy} powers={hero.powers} ></Card>)
}
    </div>
  );
}

export default App;
