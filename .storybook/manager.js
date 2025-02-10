import { addons } from '@storybook/manager-api';

addons.setConfig({
    toolbar: {
      zoom: { hidden: true },
      eject: { hidden: false },
      copy: { hidden: false },
      fullscreen: { hidden: false },
    },
  });