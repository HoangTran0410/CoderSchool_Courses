const CHOISES = {
  Keo: {
    name: 'Keo',
    nameVN: 'Kéo',
    img: require('./assets/Keo.png'),
  },
  Bua: {
    name: 'Bua',
    nameVN: 'Búa',
    img: require('./assets/Bua.png'),
  },
  Bao: {
    name: 'Bao',
    nameVN: 'Bao',
    img: require('./assets/Bao.png'),
  },
  Dinh: {
    name: 'Dinh',
    nameVN: 'Đinh',
    img: require('./assets/Dinh.png'),
  },
};

var getRandomChoise = function() {
  var keys = Object.keys(CHOISES);
  return CHOISES[keys[(keys.length * Math.random()) << 0]];
};

const RULEWIN = {
  // 'Keo' will win 'Bao', and so on
  Keo: ['Bao'],
  Bua: ['Keo', 'Dinh'],
  Bao: ['Bua'],
  Dinh: ['Bao', 'Keo'],
};

function checkWin(choise1, choise2) {
  let list = RULEWIN[choise1.name];
  for (let correctChoise2ForChoise1Win of list) {
    if (choise2.name == correctChoise2ForChoise1Win) {
      return 1; // choise 1 win
    }
  }

  let list2 = RULEWIN[choise2.name];
  for (let correctChoise1ForChoise2Win of list2) {
    if (choise1.name == correctChoise1ForChoise2Win) {
      return 2; // choise 2 win
    }
  }

  return 0;
}

function getStatus(valueCheck) {
  switch(valueCheck) {
    case 1: return 'Thắng';
    case 2: return 'Thua';
    case 0: return 'Hoà';
  }
}

function getColorStatus(valueCheck) {
  switch(valueCheck) {
    case 1: return '#5f5';
    case 2: return '#f55';
    case 0: return '#e9e9e9';
  }
}

export { CHOISES, RULEWIN, checkWin, getRandomChoise, getStatus, getColorStatus };
