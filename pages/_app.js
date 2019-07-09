import React from 'react';
import NextApp, { Container } from 'next/app';

import { StoreProvider } from '../store';

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <StoreProvider devTools={process.env.NODE_ENV === 'development'}>
          <Component {...pageProps} />
        </StoreProvider>
      </Container>
    );
  }
}

export default App;
