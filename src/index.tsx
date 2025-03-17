import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './theme/ThemeContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
