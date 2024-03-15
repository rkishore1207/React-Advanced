
import './Footer.css';

interface FooterProps{
    children:any
}

const Footer = ({children}:FooterProps) => {
    return (
        <div className="footer">
            {children}
        </div>
    );
}

export default Footer;