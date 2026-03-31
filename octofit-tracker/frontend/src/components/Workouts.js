import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    console.log('Workouts: Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Workouts: Fetched data:', results);
      })
      .catch(err => console.error('Workouts: Error fetching:', err));
  }, [endpoint]);

  return (
    <div className="card octofit-card mb-4">
      <div className="card-header dino-header-red d-flex align-items-center gap-2">
        <span>🦕</span> Workouts
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped table-hover octofit-table mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {workouts.length === 0 ? (
                <tr><td colSpan="3" className="text-center text-muted py-3">No workouts found.</td></tr>
              ) : (
                workouts.map((workout, idx) => (
                  <tr key={workout.id || idx}>
                    <td>{idx + 1}</td>
                    <td><span className="fw-semibold">{workout.name}</span></td>
                    <td>{workout.description}</td>
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

export default Workouts;
