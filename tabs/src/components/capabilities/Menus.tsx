import { menus } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Menus = () => {
    // check to see if capability is supported
    if (menus.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const MenusIsSupported = () => booleanToString(menus.isSupported());
