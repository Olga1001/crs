console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/nebula/subscription',
  hj: false,
  observe: false,
};

//Hotjar
if (settings.hj) {
  try {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 410340, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    window.hj =
      window.hj ||
      function () {
        (hj.q = hj.q || []).push(arguments);
      };
    hj('trigger', 'also_like');
  } catch (e) {}
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: New pricing strategy',
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {}
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // Code Here
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 1209457, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  hj('event', 'new_pricing');

  gaEvent('loaded');

  if (location.href.includes('/whole-genome-sequencing-dna-test')) {
    initMainPage();
  } else if (location.href.includes('portal.nebula.org/cart')) {
    initCartPage();
  }
}

function initMainPage() {
  var mainInterval = setInterval(() => {
    if (document.querySelector('.plans__wrap')) {
      clearInterval(mainInterval);
      document.querySelector('.plans__wrap').remove();
      document.querySelector('.plans__wrap').style.display = 'block';

      document
        .querySelector('.plans .plans__caption span')
        .addEventListener('click', function () {
          gaEvent('click on link', 'Nebula Explore™ Reporting Membership link');
        });

      for (let item of document.querySelectorAll('.plan__descr span')) {
        item.addEventListener('click', function () {
          gaEvent('click on link', 'Nebula Explore™ Reporting Membership link');
        });
      }

      for (let item of document.querySelectorAll('.plan__option_modal')) {
        item.addEventListener('click', function () {
          gaEvent('click on link', 'Nebula Explore™ Reporting Membership link');
        });
      }

      for (let item of document.querySelectorAll('.plan__subscr-item')) {
        item.addEventListener('click', function () {
          gaEvent('subscription selected', item.innerText.split(' ')[0]);
        });
      }

      document
        .querySelector('.infoblock__descr-btn')
        .addEventListener('click', function () {
          gaEvent('click on CTA', 'Learn more (subscription) CTA');
        });

      for (let item of document.querySelectorAll('.plan-tip')) {
        item.addEventListener('mouseenter', function () {
          gaEvent('click on link', 'Membership info link clicked');
        });
      }

      document
        .querySelector('.modal__close')
        .addEventListener('click', function () {
          gaEvent('pop-up closed', 'Membership info pop up closed');
        });
    }
  }, 500);
}

function initCartPage() {
  var cartInterval = setInterval(() => {
    if (document.querySelector('.order-summary-page')) {
      clearInterval(cartInterval);
      document.querySelector('.order-summary-page').remove();
      document.querySelector('.order-summary-page').style.display = 'block';

      for (let item of document.querySelectorAll('.order__remove')) {
        item.addEventListener('click', function () {
          gaEvent('item removed', 'Item removed from checkout');
        });
      }

      for (let item of document.querySelectorAll('.order__quantity-btn')) {
        item.addEventListener('click', function () {
          gaEvent('quantity changed', 'Item quantity changed on checkout');
        });
      }

      for (let item of document.querySelectorAll('.plans__item')) {
        item.addEventListener('click', function () {
          gaEvent('subscription changed', 'Subscription changed on checkout');
        });
      }
    }
  }, 500);
}
