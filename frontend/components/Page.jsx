import styled, { ThemeProvider, InjectGlobal } from 'styled-components';
import { node } from 'prop-types';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: 'EDEDED',
  maxWidth: '1000px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.main`
    background: ${(props) => props.theme.red};
    color: '#000000';
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
