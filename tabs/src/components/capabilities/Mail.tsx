import { Flex, Button } from "@fluentui/react-northstar";
import { mail } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Mail = () => {
    // check to see if capability is supported
    if (mail.isSupported()) {
        return (
            <Flex gap="gap.small" vAlign="center">
                <Button onClick={async () => {
                    mail.composeMail({
                        type: mail.ComposeMailType.New,
                        subject: "Hello",
                        message: "Hello World",
                        toRecipients: [
                            'AdeleV@6plbfs.onmicrosoft.com',
                            'AlexW@6plbfs.onmicrosoft.com'
                        ],
                    })
                }}>
                    Compose Mail
                </Button>
                <Button onClick={async () => {
                    mail.openMailItem({
                        itemId: '',
                    })
                }}>
                    Open Mail Item
                </Button>
            </Flex>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const MailIsSupported = () => booleanToString(mail.isSupported());
