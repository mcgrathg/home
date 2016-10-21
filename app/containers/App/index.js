/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

import styles from './styles.css';

function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Greg McGrath - Front End Developer"
        defaultTitle=" Greg McGrath - Front End Developer"
        meta={[
          { name: 'description', content: 'Greg McGrath\'s Site' },
        ]}
      />
      <Navigation />
      <div className={classNames('container', styles.wrapper)}>
        {React.Children.toArray(props.children)}
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
