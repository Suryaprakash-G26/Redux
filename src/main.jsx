import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './contetapi/contextapi.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import redux from './Redux reducers/redux.js'

const store=configureStore({
    reducer:{
        Dataupdater:redux
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
        <AppContext >
            <App />
        </AppContext>
    </Provider>
        
    </BrowserRouter>
)
