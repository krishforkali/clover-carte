import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[9999]">
            <DesktopHeader />
            <MobileHeader />
        </div>
    );
}

export default Header;