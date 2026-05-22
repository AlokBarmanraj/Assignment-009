import AuthNavbar from '@/components/AuthNavbar';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <AuthNavbar></AuthNavbar>
            { children }
        </div>
    );
};

export default AuthLayout;