import React from 'react';
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';

import SocialBar from 'components/SocialBar';
import FooterNavigation from 'components/FooterNavigation';

import textStyle from '../../responsive-text-formatting.css';
import styles from './styles.css';

function Footer() {
  const colStyle = (def) =>
    classNames(
      textStyle['text-center-sm'],
      textStyle['text-center-xs'],
      textStyle[`text-${def}-md`],
      textStyle[`text-${def}-lg`]
    );
  return (
    <footer className={classNames(styles.footer)}>
      <Grid>
        <Row className={styles.footerRow}>
          <Col md={4} className={colStyle('left')}>
            <FooterNavigation />
          </Col>
          <Col md={4} className={(colStyle('center'), styles.copyright)}>
            Copyright &copy; {new Date().getFullYear()} by Greg McGrath
          </Col>
          <Col md={4} className={colStyle('right')}>
            <SocialBar
              className={styles.social}
              iconClassName={styles.socialButton}
            />
          </Col>
        </Row>
      </Grid>
    </footer>
  );
}

export default Footer;
