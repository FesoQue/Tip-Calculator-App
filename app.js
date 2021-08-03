// SELECTORS
const bill = document.querySelector('#bill');
const customTip = document.querySelector('#custom_tip');
const people = document.querySelector('#people');
const tipBtn = document.querySelectorAll('.tip_btn');
const customBtn = document.querySelector('.custom_btn');
const tipResult1 = document.querySelector('.tip_res1');
const tipResult2 = document.querySelector('.tip_res2');
const resetBtn = document.querySelector('.reset_btn');

// FUNCTIONS
const handleInputCalc = () => {
  const billValue = bill.value;
  const customTipValue = customTip.value;
  const peopleValue = people.value;
  if (billValue !== '' && peopleValue !== '') {
    handleTipValue(billValue, peopleValue);
  }
  if (billValue !== '' && peopleValue !== '' && customTipValue !== '') {
    handleCustomInput(billValue, customTipValue, peopleValue);
  }
};
const handleTipValue = (foo, baz) => {
  tipBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const tipValue = e.currentTarget.dataset.tip;
      // add active class to the buttons
      const el = document.querySelector('.active');

      if (el) {
        el.classList.remove('active');
      }
      e.currentTarget.classList.add('active');
      if (tipValue && tipValue !== 'custom') {
        const tip_percent = tipValue / 100;
        const tipCalc = foo * tip_percent;
        const res = (tipCalc / baz).toFixed(2);
        tipResult1.innerText = res;
        tipResult2.innerText = (res * baz).toFixed(2);
        resetBtn.style.background = 'hsl(172, 67%, 45%)';
        resetBtn.style.opacity = '1';
      }
    });
  });
};

customBtn.addEventListener('click', () => {
  customBtn.classList.add('hide');
  customTip.classList.add('show');
  customTip.focus();
});

const handleCustomInput = (arg1, arg2, arg3) => {
  const tip_percent = arg2 / 100;
  const tipCalc = arg1 * tip_percent;
  const res = (tipCalc / arg3).toFixed(2);
  tipResult1.innerText = res;
  tipResult2.innerText = (res * arg3).toFixed(2);
  resetBtn.style.background = 'hsl(172, 67%, 45%)';
  resetBtn.style.opacity = '1';
};

resetBtn.addEventListener('click', () => {
  const value = document.querySelectorAll('.value');
  value.forEach((el) => {
    const childEl = el.children[1];
    childEl.innerText = '0.00';

    /* clear all input values */
    bill.value = '';
    customTip.value = '';
    people.value = '';
  });
});
// EVENT LISTENERS
bill.addEventListener('keyup', handleInputCalc);
customTip.addEventListener('keyup', handleInputCalc);
people.addEventListener('keyup', handleInputCalc);
