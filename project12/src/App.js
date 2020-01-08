import React, { useState } from 'react';
import Resources from './components/resources/resources';

const App = () => {
  //state----> setState
  const [resources, setresources] = useState("posts")
  return (
    <div className="container">
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-md-12">
          <button type="button" className="btn btn-outline-danger"
            onClick={() => setresources("posts")}
          >POSTS</button>
          <button type="button" className="btn btn-outline-success"
            style={{ marginLeft: 20 }}
            onClick={() => setresources("users")}
          >USERS</button>
        </div>
        <div className="col-md-12">
          <Resources resource={resources} />
        </div>
      </div>
    </div>
  );
}
export default App;
