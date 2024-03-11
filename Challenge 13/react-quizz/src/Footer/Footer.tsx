
interface FooterProps{
    children:any
}

const Footer = ({children}:FooterProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Footer;