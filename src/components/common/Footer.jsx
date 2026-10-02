import logo from "../../assets/images/logo.webp";
import lionLogo from "../../assets/images/lion.webp";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

export default function Footer() {

    return (
        <>
        <DesktopFooter lionLogo={lionLogo} logo={logo} />
        <MobileFooter lionLogo={lionLogo} logo={logo}/>
        </>
    );
}