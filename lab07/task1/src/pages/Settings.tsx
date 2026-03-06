const Settings = () => {
  console.log('Settings loaded!')
  
  return (
    <div className="page">
      <h2>Settings</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" defaultValue="john_doe" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" defaultValue="john@example.com" style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="button" style={{ padding: '10px', background: '#09f', color: 'white', border: 'none', borderRadius: '4px' }}>
          Save Settings
        </button>
      </form>
    </div>
  )
}

export default Settings