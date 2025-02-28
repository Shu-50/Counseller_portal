import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/logo.png';
const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Mock authentication - in a real app, this would call an API
        setTimeout(() => {
            // Mock user data - in production this would come from your backend
            const users = [
                { username: 'desk1', password: 'password1', role: 'professional', name: 'Professional Counselor' },
                { username: 'desk2', password: 'password2', role: 'campus', name: 'Campus Counselor' },
                { username: 'desk3', password: 'password3', role: 'domain', name: 'Domain Counselor' },
                { username: 'desk4', password: 'password4', role: 'admission', name: 'Admission Counselor' },
                { username: 'admin', password: 'adminpass', role: 'admin', name: 'Admin' }
            ];

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                // Set auth state and redirect based on role
                onLogin(user);
            } else {
                setError('Invalid username or password');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center" style={{
            background: "linear-gradient(135deg, #75141b, #af1734, #6b1218)"
        }}>

            <div className="bg-white p-8 rounded-lg shadow-xl shadow-red-200 w-full max-w-md" style={{
                boxShadow: "10px 10px 1px rgba(255, 255, 255, 0.45)"

            }}>
                <div className="text-center mb-8">
                    <img
                        src={logo}
                        // src='/api/placeholder/50/50'
                        alt="Institute Logo"
                        className="h-20 mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">Dr. D. Y. Patil Institute of Technology</h2>
                    <p className="text-gray-600">Counselor Login Portal</p>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-red-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? 'Logging in...' : 'Sign In'}
                    </button>

                    <div className="text-sm text-center mt-4">
                        <p className="text-gray-600">
                            For demonstration:
                        </p>
                        <p className="text-gray-500 text-xs">
                            Use desk1/password1 for Professional Counseling,<br />
                            desk2/password2 for Campus Counseling,<br />
                            desk3/password3 for Domain Counseling,<br />
                            desk4/password4 for Admission Counseling
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;