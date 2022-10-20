import { Button } from "@fluentui/react-northstar";
import { dialog } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Dialog = () => {
    // check to see if capability is supported
    if (dialog.isSupported()) {
        // return buttons to open dialog
        return (
            <Button onClick={() =>
                dialog.open({
                    title: 'Dialog Example',
                    fallbackUrl: 'https://localhost:53000',
                    url: 'https://localhost:53000/index.html#/dialog',
                    size: { height: 300, width: 300 }
                }, (response) => {
                    if (response.err) {
                        console.error(response.err);
                    }
                    console.log('submitHandler:', response.result);
                }, (res) => {
                    console.log('dialogListener', res);
                })}>
                Open Dialog
            </Button>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const DialogIsSupported = () => booleanToString(dialog.isSupported());
