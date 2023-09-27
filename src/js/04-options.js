export let flatpickrOptions = {
  locale: 'uk',
  enableTime: true,
  position: 'auto center',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0];
  }
};

export const notifyOptions = {
  width: '350px',
  timeout: 3000,
  distance: '15px',
  position: 'center-top',
  fontSize: '14px',
  clickToClose: true,
  failure: {
    background: '#eebf31',
  },
  warning: {
    background: '#ff5549',
  },
};



