import { Switch, Route } from 'react-router-dom';
import Landing from 'pages/Landing';
import React from 'react';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
        </Switch>
    );
}

export default App;
