import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log('Activities: Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities: Fetched data:', results);
      })
      .catch(err => console.error('Activities: Error fetching:', err));
  }, [endpoint]);

  return (
    <div className="card octofit-card mb-4">
      <div className="card-header dino-header-green d-flex align-items-center gap-2">
        <span>🦕</span> Activities
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped table-hover octofit-table mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Type</th>
                <th>Duration (min)</th>
                <th>Distance (km)</th>
              </tr>
            </thead>
            <tbody>
              {activities.length === 0 ? (
                <tr><td colSpan="5" className="text-center text-muted py-3">No activities found.</td></tr>
              ) : (
                activities.map((activity, idx) => (
                  <tr key={activity.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{activity.user?.username || activity.user || '—'}</td>
                    <td><span className="badge bg-danger">{activity.type}</span></td>
                    <td>{activity.duration}</td>
                    <td>{activity.distance}</td>
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

export default Activities;
