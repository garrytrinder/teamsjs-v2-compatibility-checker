import { pages } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Pages = () => {
    // check to see if capability is supported
    if (pages.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const PagesIsSupported = () => booleanToString(pages.isSupported());
