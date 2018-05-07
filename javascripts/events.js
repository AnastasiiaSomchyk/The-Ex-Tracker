const morningFilter = () => {
  $('.time').not(":contains('Morning')").closest('.localPlace').hide();
  $('.time').filter(":contains('Morning')").closest('.localPlace').show();
};

const afternoonFilter = () => {
  $('.time').not(":contains('Afternoon')").closest('.localPlace').hide();
  $('.time').filter(":contains('Afternoon')").closest('.localPlace').show();
};

const eveningFilter = () => {
  $('.time').not(":contains('Evening')").closest('.localPlace').hide();
  $('.time').filter(":contains('Evening')").closest('.localPlace').show();
};

const darkFilter = () => {
  $('.time').not(":contains('After Dark')").closest('.localPlace').hide();
  $('.time').filter(":contains('After Dark')").closest('.localPlace').show();
};

const buttonsClickEvent = () => {
  $('#morning-btn').on('click', morningFilter);
  $('#afternoon-btn').on('click', afternoonFilter);
  $('#evening-btb').on('click', eveningFilter);
  $('#dark-btn').on('click', darkFilter);
};

module.exports = {
  buttonsClickEvent,
};
