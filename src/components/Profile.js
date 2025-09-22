import React from 'react';
import { supabase } from '../supabaseClient';

function Profile({ user }) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert('Logged out');
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;