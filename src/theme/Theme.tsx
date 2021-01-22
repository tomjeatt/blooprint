import React from 'react';
import { ThemeProvider } from 'styled-components';
import RebootCss from './RebootCss';
import blooprintTheme from './blooprintTheme';

interface Props {
  children: React.ReactNode;
}

const Theme: React.FC<Props> = ({ children }: Props) => (
  <ThemeProvider theme={blooprintTheme}>
    <RebootCss />
    {children}
  </ThemeProvider>
);

export default Theme;
