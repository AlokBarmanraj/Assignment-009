import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
};

export default loading;