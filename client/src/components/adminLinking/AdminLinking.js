import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLinking.scss';

function AdminLinking() {
    return(
        <div className='admin-page-container'>
            <div className='admin-header'>
                <h1>Administrator Page</h1>
                <p>Here as an admin you have the ability to post new content, edit content, and associate data.</p> 
            </div>
            <div className='admin-linking-container'>
                <div className='admin-linking-header'>
                    <h1>Admin Operations: </h1>
                </div>
                <div className='linking-area'>
                    <h2>Posting: </h2>
                    <p>To post new movies, actors, directors, and genres click below!</p>
                    <Link to='/post'>
                        <button className='admin-button'>
                            Go To Posting Page
                        </button>
                    </Link>
                </div>
                <div className='linking-area'>
                    <h2>Editing: </h2>
                    <p>To edit information on  movies, actors, and directors click below!</p>
                    <Link to='/edit'>
                        <button className='admin-button'>
                            Go To Editing Page
                        </button>
                    </Link>
                </div>
                <div className='linking-area'>
                    <h2>Associating: </h2>
                    <p>To create associations between  movies, actors, directors, and genres click below!</p>
                    <Link to='/associate'>
                        <button className='admin-button'>
                            Go To Associations Page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminLinking;