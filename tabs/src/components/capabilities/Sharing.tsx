import { Button } from "@fluentui/react-northstar";
import { sharing } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Sharing = () => {
    // check to see if capability is supported
    if (sharing.isSupported()) {
        return (
            <Button onClick={async () => {
                try {
                    await sharing.shareWebContent({
                        content: [{
                            type: "URL",
                            url: "https://www.microsoft.com",
                            message: "Check out this link!",
                            preview: true
                        }]
                    });
                } catch {
                    console.log("User aborted");
                }
            }}> Share web content
            </Button>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const SharingIsSupported = () => booleanToString(sharing.isSupported());
