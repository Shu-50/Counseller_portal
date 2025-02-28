// import React from 'react';
import { Facebook, Instagram, Twitter, LogOut } from 'lucide-react';
import { useAuth } from '../auth/AuthProvider';

const Header = () => {
    const { currentUser, logout } = useAuth();

    return (
        <header className="bg-red-600 text-white p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src="/api/placeholder/50/50" alt="Logo" className="h-12" />
                </div>

                <div className="text-center flex-1">
                    <div className="font-bold text-lg">Dr. D. Y. Patil Unitech Society&#39;s</div>
                    <div className="font-bold text-xl">DR. D. Y. PATIL INSTITUTE OF TECHNOLOGY</div>
                    <div className="text-sm">Main Campus, Sant Tukaram Nagar, Pimpri, Pune.</div>
                    <div className="text-xs italic">
                        Permanently Affiliated to the Savitribai Phule Pune University.
                        Approved by AICTE New Delhi and DTE Maharashtra.
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-200" />
                    <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-200" />
                    <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-200" />

                    {currentUser && (
                        <div className="flex items-center ml-4">
                            <div className="mr-3 text-right">
                                <div className="font-semibold">{currentUser.name}</div>
                                <div className="text-xs">{getRoleName(currentUser.role)}</div>
                            </div>
                            <button
                                onClick={logout}
                                className="p-2 bg-red-700 rounded-full hover:bg-red-800"
                                title="Logout"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

function getRoleName(role) {
    const roles = {
        'professional': 'Professional Counseling',
        'campus': 'Campus Counseling',
        'domain': 'Domain Counseling',
        'admission': 'Admission Finalization',
        'admin': 'Administrator'
    };
    return roles[role] || 'Counselor';
}

export default Header;