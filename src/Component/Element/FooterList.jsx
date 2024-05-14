// eslint-disable-next-line react/prop-types
const FooterList = ({ title, children, contact }) => {
  return (
    <div className="list-container">
      <h2>{title}</h2>
      <ul>{children}</ul>
      {contact && (
        <div className="contact-us">
          <h4>Contact Us</h4>
          <p>info@abstract.com</p>
        </div>
      )}
    </div>
  );
};

export default FooterList;
