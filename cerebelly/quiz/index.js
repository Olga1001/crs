// function gaEvent(action, label) {
//   try {
//     dataLayer.push({
//       "event": "event-to-ga",
//       "eventCategory":  "Exp - pl_benefits",
//       "eventAction": action,
//       "eventLabel": label
//     });
//   } catch (e) {}
// };

// setTimeout(() => {
//   hj('trigger', 'pl_benefits');
// }, 2000);
// gaEvent("loaded", "");

// window.dataLayer = window.dataLayer || [];
// dataLayer.push({
// 'event': 'event-to-ga',
// 'eventCategory': 'Exp - pl_benefits',
// 'eventAction': 'loaded'
// });

/* STYLES insert start */
let stylesList = `
.quiz2-intro-form-wrap h4, .css-wjajup .quiz2-intro-wrap .quiz-disclaimer, .css-wjajup .quiz2-intro-wrap .quiz-name-wrap {
  display: none;
}
.css-8r2qqr button.button.blue {
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  padding: 18px 47px;
}


.css-wjajup .quiz2-intro-wrap .quiz2-intro-form-wrap h3 {
  font-size: 28px;
}

.css-wjajup .quiz2-intro-wrap {
  @media (max-width: 768px) {
    display: block;
  }
}

.css-wjajup .quiz2-intro-wrap .quiz2-intro-form-wrap .e-text-field {
  background: #ffffff;
  border: 1px solid #cfcfcf;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 5px;
  text-align: left;
  height: 45px;
  padding: 10px 20px;
  max-width: 100%;
}

.css-wjajup .quiz2-intro-wrap .quiz-name-wrap {
  margin-top: 25px !important;
}

.css-wjajup .quiz2-intro-wrap .quiz2-intro-form-wrap .input-wrapper {
  border: none;
  max-width: 300px;
  padding: 0;
  margin: 0;
  margin-top: 15px;
  margin-left: 0 !important;
}

.css-wjajup .quiz2-intro-wrap .quiz2-intro-form .quiz2-intro-form-wrap {
  max-width: 700px;
  padding: 30px 0 45px;
  width: 100%;
}

.step-one__disclaimer {
  display: none;
  margin-top: 43px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}

.step-one__finish-wrap {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: none;
  margin-top: 20px;
}

.step-one__back {
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #3856A7;
  margin-right: 35px;
  cursor: pointer;
  position: absolute;
  left: 20px;
  padding-left: 15px;
  line-height: 1;
  @media (max-width: 992px) {
    position: relative;
    left: 0;
  }
}

.step-one__back:before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 8px;
  height: 8px;
  border-left: 3px solid #3856A7;
  border-bottom: 3px solid #3856A7;
  transform: rotate(45deg);
}

.step-one__back:hover {
  opacity: 0.7;
}

.step-one__side {
  padding: 70px 30px;
  max-width: 370px;
  margin-right: auto;
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    text-align-center;
  }
}

.step-one__side-title {
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  color: #15226a;
  margin-top: 25px;
}

.step-one__side-caption {
  line-height: 24px;
  color: #3856A7;
  font-size: 18px;
  font-weight: 600;
  margin-top: 35px;
  max-width: 270px;
  @media (max-width: 768px) {
    display: none;
  }
}

.step-one__progress {
  margin-bottom: 70px;
}

.step-one__title {
  margin-bottom: 50px;
  font-size: 26px;
  line-height: 1;
  font-weight: 700;
}

.step-one__text {
  font-size: 18px;
  line-height: 1;
}

.step-one__gender-toggler {
  cursor: pointer;
}

.step-one__gender-toggler:hover {
  opacity: 0.8;
}

.step-one__child {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 65px;
}

.step-one__child-genders {
  margin: 0 60px 0 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 0;
}

.step-one__child-gender {
  border: 3px solid #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(56, 86, 167, 0.2);
}

.step-one__child-gender.active {
  border-color: #3856A7;
}

.step-one__child-gender + .step-one__child-gender {
  margin-left: 20px;
}

.step-one__child-twins {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.step-one__child-checkbox {
  position: relative;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 6px;
  margin-right: 9px;
  -webkit-transition: 0.35s;
  transition: 0.35s;
  border: 2px solid rgba(56, 86, 167, 0.2);
}

.step-one__child-checkbox:before {
  content: '';
  width: 5px;
  height: 10px;
  opacity: 0;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -60%) rotate(45deg);
          transform: translate(-50%, -60%) rotate(45deg);
  -webkit-transition: 0.35s;
  transition: 0.35s;
}

.active .step-one__child-checkbox {
  background-color: #3957a5;
}

.active .step-one__child-checkbox:before {
  opacity: 1;
}

.step-one__birth {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  white-space: nowrap;
}

.step-one__birth .step-one__text {
  margin-right: 20px;
}

.step-one__birth input[type='date'] {
  max-width: 243px;
  min-width: auto;
  width: 100%;
  padding: 4px 12px 6px 18px;
  text-align: left;
  font-weight: 700;
  width: 100%;
  line-height: 135%;
  color: #15206b;
  height: 44px;
  font-size: 24px;
  margin-top: 0;
}
/*# sourceMappingURL=index.css.map */
`;

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */


/*HTML insert start */
const stepOneHtml = `
<div class="step-one">
    <div class="step-one__progress_desk">
      <img src="https://flopsi69.github.io/crs/cerebelly/quiz/progress-desk.png" alt="">
    </div>
    <div class="step-one__progress_mob">
      <img src="https://flopsi69.github.io/crs/cerebelly/quiz/progress-mob.png" alt="">
    </div>
    <div class="step-one__title">Tell us a little about your child</div>
    <div class="step-one__child">
      <div class="step-one__text">My little one is</div>
      <div class="step-one__child-genders">
        <div class="step-one__child-gender step-one__gender-toggler" data-gender='1'>
          <img src="https://flopsi69.github.io/crs/cerebelly/quiz/step-one-boy.png" alt="step-one-boy">
        </div>
        <div class="step-one__child-gender step-one__gender-toggler" data-gender='2'>
          <img src="https://flopsi69.github.io/crs/cerebelly/quiz/step-one-girl.png" alt="step-one-girl">
        </div>
      </div>
      <div class="step-one__text step-one__child-twins step-one__gender-toggler" data-gender='0'>
        <div class="step-one__child-checkbox"></div>
        I prefer not to say
      </div>
    </div>
    <div class="step-one__birth">
      <div class="step-one__text">and <span class="step-one__birtch-who">her</span> Birthday is on</div>
    </div>

    <button class="button blue mt-3 mt-md-4 step-one__next"><span>continue</span></button>
  </div>
`;

const stepOneSideHtml = `
  <div class="step-one__side">
    <div class="step-one__side-title">Get a personalized meal plan with key nutrients supporting brain development</div>
    <div class="step-one__side-caption">Take our quiz to receive our science-backed recommendation based on your child's age and milestones</div>
  </div>
`;

const finishBtnHtml = `
  <div class="step-one__disclaimer">This information will help to personalize your Cerebelly experience</div>
  <div class="step-one__finish-wrap">
    <div class="step-one__back">Back</div>
    <button type="submit" class="button blue step-one__finish" style="display: block;"><span>continue</span></button>
  </div>
`;


function stepOne() {
  document.querySelector(".quiz2-intro-form-wrap").insertAdjacentHTML("afterbegin", stepOneHtml);
  document.querySelector('.step-one__birth').insertAdjacentElement("beforeend", document.querySelector(".e-input"));
  document.querySelector(".quiz2-intro-wrap").insertAdjacentHTML("afterbegin", stepOneSideHtml);
  document.querySelector('.quiz-name-wrap.mt-4 h3').innerHTML = "What’s your name?";
  document.querySelector('.quiz-name-wrap.mt-4+div h3').innerHTML = "Who is this box is for?";document.querySelector('.quiz-name-wrap.mt-4 input')
  document.querySelector('.quiz-name-wrap.mt-4+div h3').placeholder = "Parent’s name";
  document.querySelector('.quiz-name-wrap.mt-4+div input').placeholder = "Baby's Name";
  document.querySelector(".quiz2-intro-form-wrap .button[type='submit").insertAdjacentHTML("afterend", finishBtnHtml);
  document.querySelector(".quiz2-intro-form-wrap .button[type='submit']").remove();
  setGender();
  document.querySelector(".css-wjajup .quiz2-intro-wrap").style.background = "#A7D4CD";

  let selectGenderEl = document.querySelector("#select1");
  let currentGender = selectGenderEl.options.selectedIndex;
  getGenderName(currentGender);
  if (currentGender == 0) {
      document.querySelectorAll('.step-one__gender-toggler').forEach(function (el) {
      el.classList.add('active');
    });
  } else {
    document.querySelector(".step-one__gender-toggler[data-gender='" + currentGender + "']").classList.add('active');
  }
  

  document.querySelector('.step-one__next').addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    this.style.display = "none";
    document.querySelector('.step-one__child').style.display = "none";
    document.querySelector('.step-one__title').style.display = "none";
    document.querySelector('.step-one__birth').style.display = "none";
    document.querySelector('.step-one__side').style.display = "none";
    document.querySelector('.quiz-name-wrap.mt-4').style.display = "block";
    document.querySelector('.quiz-name-wrap.mt-4+div').style.display = "block";
    document.querySelector(".step-one__disclaimer").style.display = "block";
    document.querySelector(".step-one__finish-wrap").style.display = "flex";
    document.querySelector(".css-wjajup .quiz2-intro-wrap").style = "";
  })

  document.querySelector(".step-one__back").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    document.querySelector(".step-one__next").style.display = "block";
    document.querySelector('.step-one__child').style.display = "flex";
    document.querySelector('.step-one__title').style.display = "block";
    document.querySelector('.step-one__birth').style.display = "flex";
    document.querySelector('.step-one__side').style.display = "block";
    document.querySelector('.quiz-name-wrap.mt-4').style.display = "none";
    document.querySelector('.quiz-name-wrap.mt-4+div').style.display = "none";
    document.querySelector(".step-one__disclaimer").style.display = "none";
    document.querySelector(".step-one__finish-wrap").style.display = "none";
    document.querySelector(".css-wjajup .quiz2-intro-wrap").style.background = "#A7D4CD";
  })
}


function setGender() {
  document.querySelectorAll('.step-one__gender-toggler').forEach(function (el) {
    el.addEventListener("click", function () {
      let gender = this.dataset.gender;
      getGenderName(gender);
      document.querySelector("#select1").options.selectedIndex = gender;
      if (gender == 0) {
          document.querySelectorAll('.step-one__gender-toggler').forEach(function (el) {
          el.classList.add('active');
        });
      } else {
          document.querySelectorAll('.step-one__gender-toggler').forEach(function (el) {
          el.classList.remove('active');
        });
        this.classList.add("active");
      }
    })
  })
}

function getGenderName(gender) {
  console.log('gender', gender);
  
  let genderName;
  switch (gender) {
    case "1":
      genderName = "his";
      break;
    case "2":
      genderName = "her";
      break;
    default:
      genderName = "their";
      break;
  }
  document.querySelector(".step-one__birtch-who").innerText = genderName;
}


stepOne();




/* HTML insert end */