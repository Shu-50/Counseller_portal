import { useState, createContext, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is stored in localStorage (for persistence)
        const storedUser = localStorage.getItem('authUser');

        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }

        setIsLoading(false);
    }, []);

    const login = (user) => {
        setCurrentUser(user);
        setIsAuthenticated(true);
        localStorage.setItem('authUser', JSON.stringify(user));
    };

    const logout = () => {
        setCurrentUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('authUser');
    };

    return (
        <AuthContext.Provider value={{ currentUser, isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);