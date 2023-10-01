export let flatpickrOptions = {
  locale: 'uk',
  enableTime: true,
  enableMinutes: false,
  position: 'auto center',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(dateStr) {
    dateStr;
  },
  onClose(selectedDates) {
    selectedDates[0];
  },
};

export const notifyOptions = {
  width: '350px',
  timeout: 5000,
  distance: '15px',
  position: 'center-top',
  fontSize: '16px',
  clickToClose: true,
  success: {
    background: '#32c682',
  },
  failure: {
    background: '#ff5549',
  },
};
