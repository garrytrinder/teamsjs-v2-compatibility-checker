import { webStorage } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const WebStorage = () => {
    // check to see if capability is supported
    if (webStorage.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const WebStorageIsSupported = () => booleanToString(webStorage.isSupported());
