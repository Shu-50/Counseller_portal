
import Header from './Header';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Header />
            <main className="flex-1 overflow-hidden">
                {children}
            </main>
        </div>
    );
};


export default Layout;