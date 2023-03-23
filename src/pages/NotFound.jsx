import React from 'react';
import { useRouteError } from 'react-router-dom';
const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>페이지 오류</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
