import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { RouterPaths } from '../../constants';
import config from 'client/javascripts/config';
import DummyLoader from './DummyLoader';
import Loadable from 'react-loadable';

import './ContentArea.style';

/* istanbul ignore next */

const getPath = path => config.appRoute + path;

const Curriculum = Loadable({
  loader: () => import('../Curriculum'),
  loading: DummyLoader,
});

const ContentArea = () => <div className='content-area'>
  <Switch>
    <Route path={getPath(RouterPaths.CURRICULUM)} component={Curriculum} />
  </Switch>
</div>;

export default ContentArea;
