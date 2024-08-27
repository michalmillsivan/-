import { useState } from "react";
import AppMenu from "./app-menu";
import { Outlet } from "react-router-dom";

export function Root() {

    const [isOpen, setIsOpen] = useState(true)

    return (
        <div>
            <AppMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <div style={{ marginLeft: true ? "250px" : "0px" }}>
                <Outlet />
            </div>
        </div>
    );
}