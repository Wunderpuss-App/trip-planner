import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './components/App.jsx';

// uncomment so that webpack can bundle styles
import styles from './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
