
import ReactDOM from 'react-dom';
import React from 'react';

const headerStyles = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  position: 'sticky',
  top: '0',
  zIndex: '999',
};

const footerStyles = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  position: 'sticky',
  bottom: '0',
  zIndex: '999',
};

const Header = ({userName}) => {
  return (
    <div style={headerStyles}>
      <h1>This is Header component {userName}!</h1>
    </div>
  );
};

const Footer = ({userName}) => {
  return (
    <div style={footerStyles}>
      <h1>This is Footer component {userName}!</h1>
    </div>
  );
};

const showHeader = (userName, element) => {
  ReactDOM.render(<Header userName={userName}/>,
    element);
};

const showFooter = (userName, element) => {
  ReactDOM.render(<Footer userName={userName}/>,
    element);
};

module.exports = {
  showHeader,
  showFooter
}
