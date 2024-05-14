import Copyright from "./Element/Copyright";
import FooterList from "./Element/FooterList";

const Footer = () => {
  return (
    <div className="footer-outer">
      <div className="footer-container">
        <FooterList title="Abstract">
          <li>Start Trial</li>
          <li>Pricing</li>
          <li>Download</li>
        </FooterList>
        <FooterList title="Resources">
          <li>Blog</li>
          <li>Helo Center</li>
          <li>Release Note</li>
          <li>Status</li>
        </FooterList>
        <FooterList title="Comunity">
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Dribbble</li>
          <li>Podcast</li>
        </FooterList>
        <FooterList title="Company" contact="true">
          <li>About Us</li>
          <li>Carrers</li>
          <li>Legal</li>
        </FooterList>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
