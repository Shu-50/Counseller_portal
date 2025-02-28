// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const UnauthorizedPage = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                <div className="text-red-500 text-5xl mb-4">403</div>
                <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
                <p className="text-gray-600 mb-6">
                    You don&#39;t have permission to access this page.
                </p>
                <div className="flex space-x-4 justify-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Go Home
                    </button>
                    <button
                        onClick={logout}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UnauthorizedPage;