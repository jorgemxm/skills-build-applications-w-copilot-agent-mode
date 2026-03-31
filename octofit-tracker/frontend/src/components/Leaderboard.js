import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log('Leaderboard: Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboard(results);
        console.log('Leaderboard: Fetched data:', results);
      })
      .catch(err => console.error('Leaderboard: Error fetching:', err));
  }, [endpoint]);

  const medalFor = (idx) => {
    if (idx === 0) return '🥇';
    if (idx === 1) return '🥈';
    if (idx === 2) return '🥉';
    return idx + 1;
  };

  return (
    <div className="card octofit-card mb-4">
      <div className="card-header dino-header-orange d-flex align-items-center gap-2">
        <span>🏆</span> Leaderboard
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped table-hover octofit-table mb-0">
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.length === 0 ? (
                <tr><td colSpan="3" className="text-center text-muted py-3">No leaderboard data found.</td></tr>
              ) : (
                leaderboard.map((entry, idx) => (
                  <tr key={entry.id || idx}>
                    <td>{medalFor(idx)}</td>
                    <td>{entry.user?.username || entry.user || '—'}</td>
                    <td><span className="badge bg-danger">{entry.score}</span></td>
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

export default Leaderboard;
