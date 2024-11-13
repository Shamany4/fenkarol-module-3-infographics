document.addEventListener('DOMContentLoaded', () => {

  const initAccordions = () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
      const iconBlock = accordion.querySelector('.accordion__icon');
      const button = accordion.querySelector('.btn');
      const content = accordion.querySelector('.accordion__content');

      const showCloseAccordion = () => {
        // console.log(accordion)
        if (accordion.classList.contains('is-open')) {
          accordion.classList.remove('is-open');
          $(content).slideUp(500);
        } else {
          accordion.classList.add('is-open');
          $(content).slideDown(500);
        }
      }

      if (button && content) {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          showCloseAccordion();
        });
      }


      if (iconBlock && content) iconBlock.addEventListener('click', () => showCloseAccordion());

    });
  }

  const initTabs = () => {
    const tabsHeading = document.querySelectorAll('.tabs__heading');
    const tabsContent = document.querySelectorAll('.tabs__content');

    tabsHeading.forEach((tabHeading, tabHeadingIndex) => {
      tabsContent.forEach((tabContent) => {

        const showCurrentTab = (id) => {
          switch (id) {
            case 0:
              tabsHeading[1].classList.remove('is-active');
              tabsContent[1].classList.remove('is-active');
              tabsHeading[0].classList.add('is-active');
              tabsContent[0].classList.add('is-active');
              break;
            case 1:
              tabsHeading[0].classList.remove('is-active');
              tabsContent[0].classList.remove('is-active');
              tabsHeading[1].classList.add('is-active');
              tabsContent[1].classList.add('is-active');
              break;
            default:
              break;
          }
        }

        tabHeading.addEventListener('click', () => showCurrentTab(tabHeadingIndex));

      });
    });
  }

  const symptomCalculator = () => {
    const inputsRadio = document.querySelectorAll('input[type="radio"]');
    const pointResultElement = document.querySelector('.number-points__result > span');
    const degreeBlocks = document.querySelectorAll('.degree');
    let pointResult = 0;
    let groupNamesArray = [];

    const countingUniqueNames = (name) => {
      if (groupNamesArray.includes(name) || name === undefined) return;
      if (!groupNamesArray.includes(name)) groupNamesArray.push(name);
    }

    const showResult = () => {
      if (groupNamesArray.length === 5) {
        degreeBlocks.forEach((block) => {
          block.classList.remove('is-active');
          if (pointResult >= 5 && pointResult <= 25) degreeBlocks[0].classList.add('is-active');
          if (pointResult >= 30 && pointResult <= 50) degreeBlocks[1].classList.add('is-active');
          if (pointResult >= 55 && pointResult <= 75) degreeBlocks[2].classList.add('is-active');
          if (pointResult >= 80 && pointResult <= 100) degreeBlocks[3].classList.add('is-active');
        });

        pointResultElement.textContent = String(pointResult);
      }
    }

    const getResult = () => {
      let newValue = 0;

      inputsRadio.forEach((input) => {
        if (input.checked) newValue += Number(input.value) * 5;
      });

      pointResult = newValue;
      showResult();
    }

    inputsRadio.forEach((inputRadio) => {
      inputRadio.addEventListener('change', () => {
        let currentGroupName = inputRadio.getAttribute('name');

        countingUniqueNames(currentGroupName);
        getResult();
      });
    });
  }

  initAccordions();
  initTabs();
  symptomCalculator();
});