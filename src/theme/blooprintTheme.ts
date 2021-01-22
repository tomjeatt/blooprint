interface ITheme {
  colors: {
    bgPrimary: string;
    textPrimary: string;
  };
  layout: {
    margin: {
      default: string;
    };
  };
}

// Pallette
const colorDarkGrey = '#444444';
const colorLightGrey = '#D3D3D3';

// Theme variables
const bgPrimary = colorLightGrey;
const textPrimary = colorDarkGrey;

const blooprintTheme: ITheme = {
  colors: {
    textPrimary,
    bgPrimary,
  },
  layout: {
    margin: {
      default: '10px',
    },
  },
};

export default blooprintTheme;
