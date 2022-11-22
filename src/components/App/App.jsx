import React from 'react';
import Card from '../Card/Card';
import heroes from '../data/heroes.json';

import style from './app.module.scss';

function App() {
  return (<div className={style.App} > {
    heroes.map((hero) =>
      <Card key={hero.id} img={hero.img} id={hero.id} quote={hero.quote} alterego={hero.alterego} universe={hero.universe} occupation={hero.occupation} ally={hero.ally} enemy={hero.enemy} powers={hero.powers} info={hero.info}> </Card>)
  } </div>
  );
}

export default App;