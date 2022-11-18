import React from 'react';
import Card from '../Card/Card';
import heroes from '../data/heroes.json';

import '../../style/App.css';
import '../../style/Card.css'

function App() {
  return ( <div className = "App" > {
      heroes.map((hero) =>
        <Card key = {hero.id} img = {hero.img} id = {hero.id} quote = {hero.quote} alterego = {hero.alterego}universe = {hero.universe} occupation = {hero.occupation} ally = {hero.ally} enemy = {hero.enemy}powers = {hero.powers} info = {hero.info}> </Card>)
      } </div>
    );
  }

  export default App;