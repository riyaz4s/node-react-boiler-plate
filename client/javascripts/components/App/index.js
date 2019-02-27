import app from './App';
import container from './App.container';
import { withRouter } from 'react-router';

export default withRouter(container(app));