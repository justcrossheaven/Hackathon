import React from 'react';

const userContext = React.createContext({
    userId: "",
    setUserId: () => {}
});

export { userContext };