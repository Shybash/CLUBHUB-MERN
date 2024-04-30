import React ,{useState} from 'react';
import RegisterStudent from './RegisterStudent';
import RegisterClg from './RegisterClg';
import './RegisterTabs.css';
const RegisterTabs=()=>{
    const [activeTab,setActiveTab]=useState('student');

    const handleTabChange=tab=>{
        setActiveTab(tab);
    };


    return(
        <div className='reg-body'>
            
        <div className="reg-container space registration-tabs-container">
            <ul className="nav nav-tabs">
                <li className="reg-nav-item">
                    <button
                        className={`nav-link ${activeTab === 'student' ? 'active' : ''}`}
                        onClick={() => handleTabChange('student')}
                    >
                        Student Regsitration
                    </button>
                </li>
                <li className=" reg-nav-item">
                    <button
                        className={`nav-link ${activeTab === 'college' ? 'active' : ''}`}
                        onClick={() => handleTabChange('college')}
                    >
                        College Registration
                    </button>
                </li>
            </ul>

            {activeTab === 'student' && (
                <RegisterStudent />
            )}

            {activeTab === 'college' && (
                <RegisterClg />
            )}
        </div>
    </div>
    );
}

export default RegisterTabs;

