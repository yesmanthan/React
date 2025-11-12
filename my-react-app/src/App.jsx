
import React, { useState } from 'react'


const UserProfile = ({ name: initialName, email: initialEmail }) => {
 
  const [name, setName] = useState(initialName)
  const [email, setEmail] = useState(initialEmail)
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    setIsEditing(false)
    alert(`Profile Saved!\nName: ${name}\nEmail: ${email}`)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
          width: '320px',
        }}
      >
        <h1 style={{ color: '#0077cc', marginBottom: '1rem' }}>User Profile</h1>

        {isEditing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '10px',
                borderRadius: '6px',
                border: '1px solid #ccc',
              }}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '10px',
                borderRadius: '6px',
                border: '1px solid #ccc',
              }}
            />
            <button
              onClick={handleSave}
              style={{
                backgroundColor: '#0077cc',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                cursor: 'pointer',
              }}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <h2>{name}</h2>
            <p>{email}</p>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                backgroundColor: '#0077cc',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                cursor: 'pointer',
              }}
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default UserProfile

