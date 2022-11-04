import { Button } from "@fluentui/react-northstar";
import { webStorage } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const WebStorage = () => {
    // check to see if capability is supported
    if (webStorage.isSupported()) {
        return (
            <Button onClick={async () => {
                const isCleared = webStorage.isWebStorageClearedOnUserLogOut();
                console.log(isCleared);
            }}>
                Is Storage Cleared On LogOut
            </Button>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const WebStorageIsSupported = () => booleanToString(webStorage.isSupported());
