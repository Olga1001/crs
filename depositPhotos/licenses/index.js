/*** Analytics insert start ***/

// try {
//   (function (h, o, t, j, a, r) {
//     h.hj =
//       h.hj ||
//       function () {
//         (h.hj.q = h.hj.q || []).push(arguments);
//       };
//     h._hjSettings = { hjid: 2196497, hjsv: 6 };
//     a = o.getElementsByTagName('head')[0];
//     r = o.createElement('script');
//     r.async = 1;
//     r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//     a.appendChild(r);
//   })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
//   window.hj =
//     window.hj ||
//     function () {
//       (hj.q = hj.q || []).push(arguments);
//     };
//   hj('trigger', 'Cart_Clearpay');
// } catch (e) {}

// function gaEvent(action) {
//   try {
//     dataLayer.push({
//       event: 'event-to-ga',
//       eventCategory: 'Exp - Cart Clearpay',
//       eventAction: action
//     });
//   } catch (e) {}
// }
// gaEvent('loaded');

/*** Analytics insert -end- ***/

const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/licenses';

/*** STYLES insert start ***/

let stylesList = `
  .lav-licenses {

  }
  .lav-license {
    display: flex;
    padding: 16px 25px 20px;
    border-radius: 6px;
    border: 3px solid transparent;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-license_active {
    background: #E8F0F9;
    border: 3px solid #B7D9FF;
    pointer-events: none;
  }
  .lav-license__label {

  }
  .lav-license__label img {
    width: 60px;
    margin-top: 15px;
  }
  .lav-license__info {
    margin-left: 18px;
  }
  .lav-license__title {
    font-weight: 800;
    font-size: 15px;
    margin-bottom: 7px;
    line-height: 1.2;
    color: #3C3C3C;
  }
  .lav-license__list {
    font-size: 10px;
    line-height: 1.2;
    color: #3C3C3C;
  }
  .lav-license__item {
    position: relative;
    padding-left: 15px;
  }
  .lav-license__item + .lav-license__item {
    margin-top: 7px;
  }
  .lav-license__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6px;
    width: 12px;
    height: 12px;
  }
  .lav-license__item.lav-license__item_include:before {
    background: url(${REPO_DIR}/icon-include.svg) center no-repeat;
    background-size: cover;
  }
  .lav-license__item.lav-license__item_exclude:before {
    background: url(${REPO_DIR}/icon-exclude.svg) center no-repeat;
    background-size: cover;
  }
  .lav-license__modal-trigger {
    font-size: 10px;
    line-height: 1;
    color: #9C9C9C;
    margin-top: 12px;
    display: inline-block;
    border-bottom: 1px solid rgb(156, 156, 156, 50%);
  }
`;

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);

/*** STYLES insert -end- ***/

/*** HTML insert start ***/
let licensEl = `
  <div class='lav-licenses'>
    <div class='lav-license lav-license_active'>
      <div class='lav-license__label'>
        <img src='${REPO_DIR}/label-sl.svg'>
      </div>
      <div class='lav-license__info'>
        <div class='lav-license__title'>Standard license</div>
        <div class='lav-license__list'>
          <div class='lav-license__item lav-license__item_include'>Unlimited web usage</div>
          <div class='lav-license__item lav-license__item_exclude'>Limited usage for resale, print, advertising</div>
        </div>
      </div>
    </div>

    <div class='lav-license'>
      <div class='lav-license__label'>
        <img src='${REPO_DIR}/label-el.svg'>
      </div>
      <div class='lav-license__info'>
        <div class='lav-license__title'>Extended license</div>
        <div class='lav-license__list'>
          <div class='lav-license__item lav-license__item_include'>Unlimited web usage</div>
          <div class='lav-license__item lav-license__item_include'>Limited usage for resale, print, advertising</div>
        </div>
        <div class='lav-license__modal-trigger'>What’s an extended lisence?</div>
      </div>
    </div>
  </div>
`;
/*** HTML insert -end- ***/
init();
function init() {
  document
    .querySelector('.price-table-upgrade')
    .insertAdjacentHTML('beforebegin', licensEl);

  document.querySelectorAll('.lav-license').forEach(license => {
    license.addEventListener('click', function (e) {
      e.preventDefault();
      document
        .querySelector('.lav-license_active')
        .classList.remove('lav-license_active');
      this.classList.add('lav-license_active');
    });
  });
}
