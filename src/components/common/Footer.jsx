import logo from "../../assets/images/logo.png";
import lionLogo from "../../assets/images/lion.png";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import DunsSeal from "../ifrmae/DunsSeal";

export default function Footer() {

    return (
        <>
        <DesktopFooter lionLogo={lionLogo} logo={logo} />
        <MobileFooter lionLogo={lionLogo} logo={logo}/>
        </>
    );
}