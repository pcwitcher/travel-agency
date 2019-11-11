const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    endpoint: {
      orders: 'orders',
    },
  },
};

export default settings;
