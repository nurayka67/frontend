const Profile = () => {
  return (
    <div className="page">
      <h2>User Profile</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          background: '#09f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem'
        }}>
          JD
        </div>
        <div>
          <h3>John Doe</h3>
          <p>Software Developer</p>
          <p>Member since: 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Profile