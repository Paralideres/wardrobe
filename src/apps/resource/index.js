import 'common/utils/polyfill';

import { init } from 'common/containers/Base';
import Main from './containers/Main';
import rootReducer from './reducers';

// App Entry Point
init(Main, rootReducer);
