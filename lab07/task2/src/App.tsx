import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorFallback from './components/ErrorFallback'
import Home from './pages/Home'
import BuggyComponent from './pages/BuggyComponent'


const Dashboard = lazy(() => import('./pages/Dashboard'))
const Settings = lazy(() => import('./pages/Setting'))
const Profile = lazy(() => import('./pages/Profile'))

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Code Splitting with Error Boundaries</h1>
        <Navigation />
        
        
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              
              <Route path="/buggy" element={<BuggyComponent />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>

        
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#e8f4fd', borderRadius: '4px' }}>
          <h3>Testing Error Boundary:</h3>
          <p>Click on "Buggy Component" in navigation to see error handling in action!</p>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App