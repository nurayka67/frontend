interface ErrorFallbackProps {
  error?: Error
  resetError?: () => void
}


const ErrorFallback = ({ error, resetError }: ErrorFallbackProps) => {
  return (
    <div className="error-container">
      <h2> Oops! Something went wrong</h2>
      <p>{error?.message || 'Failed to load component'}</p>
      <p style={{ fontSize: '0.9rem', color: '#999' }}>
        Don't worry, we're working on it!
      </p>
      {resetError && (
        <button onClick={resetError} className="retry-button">
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorFallback