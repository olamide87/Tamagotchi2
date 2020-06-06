import '../styles/main.scss';
import eat from './components/eat/eat';
import eatData from './helpers/data/eadData';
import play from './components/play/play';
import playData from './helpers/data/playData';

const addToFullScore = () => {
  eatData.setFullScore(10);
  eat.eatBuilder();
};

const subFromFullScore = () => {
  eatData.setFullScore(-3);
  eat.eatBuilder();
};

const addSuperFun = () => {
  playData.setFunScore(50);
  play.playBuilder();
};

const addSlightlyFun = () => {
  playData.setFunScore(2);
  play.playBuilder();
};

const buttonEvents = () => {
  $('#eat').on('click', '#healthy-food-btn', addToFullScore);
  $('#eat').on('click', '#unhealthy-food-btn', subFromFullScore);
  $('#play').on('click', '#super-fun-btn', addSuperFun);
  $('#play').on('click', '#slightly-fun-btn', addSlightlyFun);
};


const quad = () => {
  eat.eatBuilder();
  play.playBuilder();
};

const init = () => {
  buttonEvents();
  quad();
};


init();
