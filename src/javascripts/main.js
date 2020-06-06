import '../styles/main.scss';
import eat from './components/eat/eat';
import eatData from './helpers/data/eadData';

const addToFullScore = () => {
  eatData.setFullScore(10);
  eat.eatBuilder();
};

const subFromFullScore = () => {
  eatData.setFullScore(-3);
  eat.eatBuilder();
};

const buttonEvents = () => {
  $('#eat').on('click', '#healthy-food-btn', addToFullScore);
  $('#eat').on('click', '#unhealthy-food-btn', subFromFullScore);
};


const quad = () => {
  eat.eatBuilder();
};

const init = () => {
  buttonEvents();
  quad();
};


init();
