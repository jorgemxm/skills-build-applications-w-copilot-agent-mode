import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    console.log('Teams: Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams: Fetched data:', results);
      })
      .catch(err => console.error('Teams: Error fetching:', err));
  }, [endpoint]);

  return (
    <div className="card octofit-card mb-4">
      <div className="card-header dino-header-blue d-flex align-items-center gap-2">
        <span>🦖</span> Teams
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped table-hover octofit-table mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Team Name</th>
              </tr>
            </thead>
            <tbody>
              {teams.length === 0 ? (
                <tr><td colSpan="2" className="text-center text-muted py-3">No teams found.</td></tr>
              ) : (
                teams.map((team, idx) => (
                  <tr key={team.id || idx}>
                    <td>{idx + 1}</td>
                    <td><span className="fw-semibold">{team.name}</span></td>
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

export default Teams;
