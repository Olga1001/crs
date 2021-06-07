function gaEvent(action, label = '') {
  window.dataLayer = window.dataLayer || [];
  try {
    let eventObj = {
      event: 'ga_event',
      eventCategory: 'Exp — PDP: add phone number',
      eventAction: action
    };
    if (label) {
      eventObj['eventLabel'] = label;
    }
    dataLayer.push(eventObj);
  } catch (e) {}
}

let isInitExp = false;
const REPO_DIR = 'https://flopsi69.github.io/crs/bol/pdp';

// let observerGlobal = new MutationObserver(mutations => {
//   for (let mutation of mutations) {
//     for (let node of mutation.addedNodes) {
//       // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
//       if (!(node instanceof HTMLElement)) continue;
//       console.log(node);
//       if (
//         node.querySelector('.pageContainer .container') &&
//         node.querySelector('.products') &&
//         node.querySelector('.category') &&
//         !isInitExp
//       ) {
//         initExp();
//         // observerGlobal.disconnect();
//       }
//     }
//   }
// });

// observerGlobal.observe(document.body, { childList: true, subtree: true });

function initStyles() {
  /* STYLES insert start */
  let stylesList = `
    .items-info > img {
      display: none;
    }
    .prod_class .title h1 {
      text-align: center;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      color: #231F20;
      margin-top: 15px;
      margin-bottom: 35px;
    }
    .text-center.two-pic {
      display: none; 
    }
    .form-add-to-cart .price {
      position: relative;
      padding-right: 90px;
    }
    .form-add-to-cart .rte {
      margin-top: 30px;
    }
    .money {
      white-space: nowrap;
    }
    #productPrice-manual {
      padding-top: 5px;
      display: inline-block;
    }
    .quantity {
      padding-right: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .quantity>span {
      display: block;
      float: none;
      width: 100%;
    }
    .quantity>.qty {
      float: none;
    }
    .lav-free-shipping {
      font-weight: bold;
      font-size: 14px;
      line-height: 1;
      text-align: center;
      color: #333333;
      border: 1px solid #7CB305;
      border-radius: 12px;
      padding: 2px 7px;
    }
    .lav-discount {
      position: absolute;
      right: -15px;
      top: 0;
    }
    .lav-discount__value {
      background: #A8071A;
      border-radius: 3px;
      padding: 8px 10px;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 8px;
    }
    .lav-discount__shipping {
      font-weight: bold;
      font-size: 13px;
      line-height: 1;
      text-align: center;
      color: #7CB305;
    }
    .lav-total {
      display: flex;
      align-items: center;
    }
    .lav-total__caption {
      margin-right: 11px;
      font-weight: bold;
      font-size: 14px;
      line-height: 1;
      color: #5F6262;
    }
    .lav-total__value {
      font-weight: bold;
      font-size: 24px;
      color: #AB2216;
    }
    .lav-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 32px 5px;
      border-top: 1px solid #DFDFDF;
      border-bottom: 1px solid #DFDFDF;
    }
    .lav-options__list {
      display: flex;
    }
    .lav-options__caption {
      font-size: 22px;
      line-height: 26px;
      color: #333333;
    }
    .lav-options__item {
      text-align: center;
      padding: 12px 18px;
      background: #FAFAFA;
      border: 1px solid #096DD9;
      border-radius: 6px;
      font-size: 16px;
      line-height: 19px;
      color: #096DD9;
      width: 195px;
      max-width: 100%;
      transition: 0.35s;
    }
    .lav-options__item:hover {
      background-color: #eae8e8;
    }
    .lav-options__item + .lav-options__item {
      margin-left: 30px;
    }
    .lav-info {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      margin-bottom: 37px;
    }
    .lav-info__block-title {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      color: #000000;
      margin-bottom: 40px;
    }
    .lav-feautures {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 50px 55px;
    }
    .lav-feautures__wrap {
      max-width: 510px;
      width: 100%;
      text-align: center;
    }
    .lav-combo {
      display: flex;
    }
    .lav-combo__wrap {
      max-width: 335px;
      width: 100%;
    }
    .lav-combo__info {
      padding-left: 20px;
      font-size: 16px;
      line-height: 19px;
      color: #231F20;
    }
    .lav-combo__title {
      font-weight: bold;
    }
    .lav-combo__green {
      margin: 10px 0;
      color: #7CB305;
    }
    .lav-combo__list-caption {
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 10px;
    }
    .lav-combo__list li + li {
      margin-top: 3px;
    }
    .lav-combo__zoom {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      line-height: 21px;
      color: #096DD9;
      border: 1px solid #DFDFDF;
      border-radius: 6px;
      padding: 8px 12px;
    }
    .lav-combo__zoom img {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
    .lav-feautures__icon {
      margin-bottom: 15px;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lav-feautures__icon img {
      max-width: 100%;
      max-height: 100%;
    }
    .lav-feautures__caption {
      font-size: 15px;
      line-height: 18px;
      color: #5F6262;      
    }
    .lav-static img {
      width: auto;
    }
    .lav-compability {
      border: 1px solid #DFDFDF;
      border-radius: 6px;
      padding: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lav-compability__caption {
      font-weight: bold;
      font-size: 22px;
      line-height: 1;
      color: #000000;
    }
    .lav-compability__call {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 18px;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
      color: #096DD9;
      border: 1px solid #096DD9;
      border-radius: 6px;
    }
    .lav-compability__call img {
      margin-left: 20px;
    }
  `;

  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}

// connect to DOM
/* STYLES insert end */

// CODE START ***
// var intervalInit = setInterval(() => {
//   if (typeof advertId !== 'undefined') {
//     console.log('success..');
//     clearInterval(intervalInit);
//     init();
//   } else {
//     console.log('try one more..');
//   }
// }, 500);

initExp();
function initExp() {
  initStyles();
  changeDom();
  if ($('#comparePrice-manual').length) {
    setDiscount();
    $('#productPrice-manual').html(
      $('#productPrice-manual')
        .html()
        .replace(
          '&amp; Free Shipping',
          '<span class="lav-free-shipping">Free Shipping</span>'
        )
    );
  }
  initStaticBlock();
}

function changeDom() {
  $('#main-product-image')
    .parent()
    .removeClass('col-lg-8')
    .next()
    .removeClass('col-lg-4');
}

function setDiscount() {
  let discountVal = $('#comparePrice-manual').text().trim().replace('$', '');

  discountVal =
    100 -
    ($('#productPrice-manual .money .money').text().trim().replace('$', '') *
      100) /
      discountVal;
  let disocuntEl = `
   <div class='lav-discount'>
     <div class='lav-discount__value'>${discountVal}% OFF</div>
     <div class='lav-discount__shipping'>Ready to ship</div>
   </div>
  `;

  $('.form-add-to-cart .price').append(disocuntEl);

  let totalEl = `
    <div class="lav-total">
      <div class="lav-total__caption">Total price :</div>
      <div class="lav-total__value">$0</div>
    </div>
  `;
  $('.quantity').append(totalEl);
  setTotalPrice();

  $('.qty').on('click', setTotalPrice);
  $('.form-add-to-cart .text-center img').css('max-width', '350px');
}

function setTotalPrice() {
  let totalPrice =
    $('#productPrice-manual .money .money').text().trim().replace('$', '') *
    $('#quantity').val();

  $('.lav-total__value').text('$' + totalPrice.toFixed(2));
}

function initStaticBlock() {
  let blockEl = `
    <div class='lav-static'>
      <div class='lav-options'>
        <div class='lav-options__caption'>See other options</div>
        <div class='lav-options__list'>
          <div class='lav-options__item'>20 inch <br> double row</div>
          <div class='lav-options__item'>30 inch <br> double row</div>
          <div class='lav-options__item'>40 inch <br> double row</div>
        </div>
      </div>

      <div class='lav-info'>
        <div class='lav-info__block lav-feautures__wrap'>
          <div class='lav-info__block-title'>Key Features</div>
          <div class='lav-feautures'>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-1.svg' />
              </div>
              <div class='lav-feautures__caption'>50,000+ Hour Lifespan</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-2.svg' />
              </div>
              <div class='lav-feautures__caption'>9-36  V DC Voltage Range</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-3.png' />
              </div>
              <div class='lav-feautures__caption'>Durable UV Polyester Poweder Coat</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-4.svg' />
              </div>
              <div class='lav-feautures__caption'>Integrated Thermal Mgmt. System</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-5.svg' />
              </div>
              <div class='lav-feautures__caption'>Impact Resistant Polycarbonate Lens</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-6.svg' />
              </div>
              <div class='lav-feautures__caption'>IP68 & IP69 Compliant Dust / Water Ingress</div>
            </div>
          </div>
        </div>

        <div class='lav-info__block lav-combo__wrap'>
          <div class='lav-info__block-title'>Max performance with <br> Combo optics and 5W</div>
          <div class='lav-combo'>
            <div class='lav-combo__image'>
              <img src='${REPO_DIR}/img/combo-light.png' />
            </div>
            <div class='lav-combo__info'>
              <div class='lav-combo__title'>COMBO with 5Wprovides:</div>
              <div class='lav-combo__green'>Over 75 % more 
              Light & Visibility</div>
              <div class='lav-combo__vis'>Visibility up to <strong>780m</strong></div>
              <div class='lav-combo__list-caption'>Best for:</div>
              <ul class='lav-combo__list'>
                <li>- Marine</li>
                <li>- Hunting</li>
                <li>- Off-road</li>
                <li>- Heavy Machinery</li>
                <li>- Military</li>
              </ul>
              <div class='lav-combo__zoom'><img src='${REPO_DIR}/img/icon-zoom.svg'>Click to zoom</div>
            </div>
          </div>
        </div>
      </div>

      <div class='lav-compability'>
        <div class='lav-compability__caption'>Compatibility</div>
        <a href='#' class='lav-compability__call'>
          Call us 800-348-1287 to assist
          <img src='${REPO_DIR}/img/ico-3.svg'>
        </a>
      </div>
    </div>
  `;

  $('.items-info').prepend(blockEl);
}
