import { Button } from "@fluentui/react-northstar";
import { call } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Call = () => {
    // check to see if capability is supported
    if (call.isSupported()) {
        // return button to start a call
        return (
            <Button onClick={async () => {
                await call.startCall({
                    targets: [
                        'AdeleV@6plbfs.onmicrosoft.com',
                        'AlexW@6plbfs.onmicrosoft.com'
                    ],
                    requestedModalities: [
                        call.CallModalities.Audio,
                        call.CallModalities.Video,
                        call.CallModalities.VideoBasedScreenSharing,
                        call.CallModalities.Data
                    ]
                })
            }}>
                Start Call
            </Button>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const CallIsSupported = () => booleanToString(call.isSupported());
