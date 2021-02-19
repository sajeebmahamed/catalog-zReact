import { Helmet } from 'react-helmet';
import AppRouter from './router';

function App() {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Catalog-Z HTML Template</title>
            </Helmet>
            <AppRouter />
        </div>
    );
}

export default App;
