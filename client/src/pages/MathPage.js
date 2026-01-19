import React from 'react';

const MathPage = () => {
    return (
        <div style={{
            marginTop: '80px', // Space for navbar
            padding: '20px',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="mb-4">Mathematics</h1>
                        <div className="card">
                            <div className="card-body">
                                <h2>Welcome to Mathematics Section</h2>
                                <p className="lead">
                                    Explore mathematical concepts, problems, and solutions.
                                </p>
                                {/* Add your math content here */}
                                <div className="mt-4">
                                    <h3>Topics</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item">Algebra</li>
                                        <li className="list-group-item">Geometry</li>
                                        <li className="list-group-item">Calculus</li>
                                        <li className="list-group-item">Statistics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MathPage;
