import '../../node_modules/fullpage.js/vendors/scrolloverflow.js';
import fullpage from 'fullpage.js';

const fullPageScroll = new fullpage('#fullpage-scroll', {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  scrollOverflow: true,
  anchors: ['about', 'works', 'skills', 'contacts'],
  menu: '#full-page-menu'
});

export default fullPageScroll;