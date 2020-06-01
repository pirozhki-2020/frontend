import topPart from '/public/static/img/top.png';
import middlePart from '/public/static/img/middle.png';
import contentPart from '/public/static/img/content.png';
import bottomPart from '/public/static/img/bottom.png';

const TOP_SIZE = 1440;
const MIDDLE_SIZE = 1440;
const CONTENT_SIZE = 1008;
const BOTTOM_SIZE = 1512;

const BOTTLE_PARTS = {
  top: {
    image: topPart,
    size: TOP_SIZE
  },
  middle: {
    image: middlePart,
    size: MIDDLE_SIZE,
  },
  content: {
    image: contentPart,
    size: CONTENT_SIZE,
  },
  bottom: {
    image: bottomPart,
    size: BOTTOM_SIZE,
  }
};

export default BOTTLE_PARTS;
