import { useState } from 'react'


const BuggyComponent = () => {
  const [shouldThrow, setShouldThrow] = useState(false)

  if (shouldThrow) {
    throw new Error('This is a test error from BuggyComponent!')
  }

  return (
    <div className="page">
      <h2>Buggy Component</h2>
      <p>This component is designed to test error boundaries.</p>
      <button 
        onClick={() => setShouldThrow(true)}
        className="buggy-button"
      >
         Throw Error
      </button>
    </div>
  )
}

export default BuggyComponent