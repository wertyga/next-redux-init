import App, { AppContext } from 'next/app';
import { Provider } from 'react-redux';
import { getOrInitializeStore } from 'redux/initializeStore';
import { getInitialState } from 'redux/getInitialState';
import { Notify } from 'Components/Common/Notify/Notify';
import { WebWorkerProvider } from 'hooks/WebWorkerProvider/WebWorkerProvider';

import 'assets/globals.css';
import 'assets/fonts.css';
import 'assets/normalize.css';
import 'assets/typography.css';
import 'assets/variables.css';

function RootApp({ Component, pageProps, reduxProps }) {
  const reduxStore = getOrInitializeStore(reduxProps);
  return (
    <Provider store={reduxStore} serverState={reduxProps}>
      <Notify />
      <WebWorkerProvider>
        <Component {...pageProps} />
      </WebWorkerProvider>
    </Provider>
  );
}

export default RootApp;

RootApp.getInitialProps = async (appContext: AppContext) => {
  if (appContext.ctx.req) {
    await getInitialState(appContext.ctx);
  }
  const [appProps, reduxProps] = await Promise.all([
    App.getInitialProps(appContext),
    appContext.ctx.req && getInitialState(appContext.ctx),
  ]);

  return { reduxProps, ...appProps };
};
