const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmgWarrior: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function damageDragon (dragon) {
  const min = 15;
  const max = Math.round((Math.random() * dragon.strength));
  const dmgDragon = max > min ? max : min;
  return dmgDragon;
}

function damageWarrior (warrior) {
  const min = warrior.strength;
  const max = Math.round(Math.random() * (warrior.weaponDmgWarrior * min));
  const dmgWarrior = max > min ? max : min;
  return dmgWarrior;
}

function damageMage (mage) {
  const mana = mage.mana;
  const min = mage.intelligence;
  const max = Math.round((Math.random() * (min * 2)))
  const stats = {
    dano: 0,
    manaGasta: 'Sem mana',
  }
  if (mana > 15) {
    const dmgMage = min < max ? max : min;
    stats.manaGasta = 15;
    stats.dano = dmgMage;
  }
  return stats;
}

const gameActions = {
  warriorTurn: (damageWarrior) => {
    const danoWarrior = damageWarrior(warrior);
    dragon.healthPoints -= danoWarrior;
    warrior.damage = danoWarrior;
  },

   mageTurn: (damageMage) => {
    const mageStats = damageMage(mage);
    const danoMage = mageStats.dano;
    dragon.healthPoints -= danoMage;
    mage.damage = danoMage;
    mage.mana -= mageStats.manaGasta;
  },

  dragonTurn: (damageDragon) => {
    const danoDragon = damageDragon(dragon);
    warrior.healthPoints -= danoDragon;
    mage.healthPoints -= danoDragon;
    dragon.damage = danoDragon;
  },
  retornarGuerreiros: () => console.log(battleMembers),
};

gameActions.warriorTurn(damageWarrior);
gameActions.mageTurn(damageMage);
gameActions.dragonTurn(damageDragon);
gameActions.retornarGuerreiros();

