/* eslint react/prop-types: 0 */

import 'bulma/css/bulma.css';
import './app.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}