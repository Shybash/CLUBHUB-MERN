import React, { useState } from 'react';
import Loginclg from './LoginClg';
import LoginStudent from './LoginStu';
import './LoginTabs.css';
const LoginTabs = () => {
    const [activeTab, setActiveTab] = useState('student');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='login-body'>
            <div className="login-container space registration-tabs-container">
                <ul className="nav nav-tabs">
                    <li className="Login-nav-item">
                        <button
                            className={`nav-link ${activeTab === 'student' ? 'active' : ''}`}
                            onClick={() => handleTabChange('student')}
                        >
                            Student Login
                        </button>
                    </li>
                    <li className="Login-nav-item">
                        <button
                            className={`nav-link ${activeTab === 'college' ? 'active' : ''}`}
                            onClick={() => handleTabChange('college')}
                        >
                            College Login
                        </button>
                    </li>
                </ul>

                {activeTab === 'student' && (
                    <LoginStudent />
                )}

                {activeTab === 'college' && (
                    <Loginclg />
                )}
            </div>
        </div>
    );
}

export default LoginTabs;
