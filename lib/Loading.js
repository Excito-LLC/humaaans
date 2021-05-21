import React from 'react';
export default function Loading({
  isLoading,
  pastDelay,
  error
}) {
  if (isLoading && pastDelay) {
    return /*#__PURE__*/React.createElement("p", null, "Loading...");
  } else if (error && !isLoading) {
    return /*#__PURE__*/React.createElement("p", null, "Error!");
  } else {
    return null;
  }
}