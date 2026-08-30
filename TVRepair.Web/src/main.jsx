import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import navbar from './components/navbar.jsx'
import { BrowserRouter} from 'react-router' 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AuthenticationContext from './context/authenticationcontext.jsx'
 
const queryclient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
    <BrowserRouter>
    <AuthenticationContext>
    <App />
    </AuthenticationContext>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
