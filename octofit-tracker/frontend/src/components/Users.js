import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    console.log('Users: Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Users: Fetched data:', results);
      })
      .catch(err => console.error('Users: Error fetching:', err));
  }, [endpoint]);

  return (
    <div className="card octofit-card mb-4">
      <div className="card-header dino-header-yellow d-flex align-items-center gap-2">
        <span>🦴</span> Users
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped table-hover octofit-table mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr><td colSpan="4" className="text-center text-muted py-3">No users found.</td></tr>
              ) : (
                users.map((user, idx) => (
                  <tr key={user.id || idx}>
                    <td>{idx + 1}</td>
                    <td><span className="fw-semibold">{user.username}</span></td>
                    <td>{user.email || '—'}</td>
                    <td>{user.team?.name || user.team || <span className="text-muted">No team</span>}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
