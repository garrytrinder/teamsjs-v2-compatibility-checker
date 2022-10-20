import { Button } from "@fluentui/react-northstar";
import { appInstallDialog } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const AppInstallDialog = () => {
    // check to see if capability is supported
    if (appInstallDialog.isSupported()) {
        // return button to open dialog
        return (
            <Button onClick={async () => {
                await appInstallDialog.openAppInstallDialog({
                    appId: 'com.microsoft.teamspace.tab.youtube'
                });
            }}>
                Open App Install Dialog
            </Button>
        )
    }
    // return empty fragment if capability is not supported
    return (<></>);
}

export const AppInstallDialogIsSupported = () => booleanToString(appInstallDialog.isSupported());
