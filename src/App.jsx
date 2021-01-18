import React, { useState, useEffect } from 'react';
import './App.scss';
import Heros from './components/Heros';

export const App = () => {
  const [humans, setHumans] = useState([]);
  const [hobbits, setHobbits] = useState([]);
  const [elfs, setElfs] = useState([]);
  const [dworfs, setDworfs] = useState([]);
  const socket = new WebSocket('ws://testapi.marit.expert:3004');

  useEffect(() => {
    socket.onopen = () => {
      socket.send('get_list');
    };

    socket.onmessage = (e) => {
      sortByRace(JSON.parse(e.data));
    };
  }, []);

  async function sortByRace(heros) {
    const human = [];
    const hobbit = [];
    const elf = [];
    const dworf = [];

    heros.forEach((hero) => {
      switch (hero.race) {
        case 'Human':
          human.push(hero);
          break;
        case 'Hobbit':
          hobbit.push(hero);
          break;
        case 'Elf':
          elf.push(hero);
          break;
        case 'Dworf':
          dworf.push(hero);
          break;
        default:
          human.push(hero);
      }
    });

    setHumans(human);
    setHobbits(hobbit);
    setElfs(elf);
    setDworfs(dworf);
  }

  return (
    <div className="app">
      <Heros race={humans} />
      <Heros race={hobbits} />
      <Heros race={elfs} />
      <Heros race={dworfs} />
    </div>
  );
};
