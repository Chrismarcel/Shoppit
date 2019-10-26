import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { node } from 'prop-types';
import Meta from './Meta';
import Header from './Header';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: 'EDEDED',
  maxWidth: '1000px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  breakPoint: 1300
};

// eslint-disable-next-line no-unused-expressions
injectGlobal`
@font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format: 'woff2';
    font-weight: normal;
    font-style: normal;
}
html {
    box-sizing: border-box;
    font-size: 10px;
}

*, *::before, *::after {
    box-sizing: inherit;
}

body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
}

a {
    text-decoration: none;
    color: ${theme.black}
}
`;

const StyledPage = styled.main`
    background: '#FFFFFF';
    color: ${(props) => props.theme.black};
`;

const Inner = styled.section`
    max-width: ${(props) => props.theme.maxWidth};
    margin: '0 auto';
    padding: '2rem';
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Inner>
        {children}
      </Inner>
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: node.isRequired
};

export default Page;
