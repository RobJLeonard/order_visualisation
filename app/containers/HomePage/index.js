/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import BoardContainer from "../Board/BoardContainer";

export default function HomePage() {
  return (
    <div>
      <h1>
        <img style={{ width: 200,  marginLeft:10  }} src={require('../../images/bellurgan_logo.png')} />
        <FormattedMessage {...messages.header} />
      </h1>
      <BoardContainer />
      <img style={{ width: 200, marginBottom: 20, marginLeft:10 }} src={require('../../images/lbs_logo.png')} />
    </div>
  );
}
