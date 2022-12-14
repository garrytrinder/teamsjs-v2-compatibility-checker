import { Button, Flex } from "@fluentui/react-northstar";
import { chat } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Chat = () => {
    // check to see if capability is supported
    if (chat.isSupported()) {
        // return buttons to start 1:1 and group chat
        return (
            <Flex gap="gap.small" vAlign="center">
                <Button onClick={async () => {
                    await chat.openChat({
                        user: 'AdeleV@6plbfs.onmicrosoft.com',
                        message: "Chat with one person"
                    })
                }}>
                    Start Chat
                </Button>
                <Button onClick={async () =>
                    await chat.openGroupChat({
                        users: [
                            'AdeleV@6plbfs.onmicrosoft.com',
                            'AlexW@6plbfs.onmicrosoft.com'
                        ],
                        message: "Chat with more than one person",
                        topic: "Group Chat"
                    })}>
                    Start Group Chat
                </Button>
            </Flex>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const ChatIsSupported = () => booleanToString(chat.isSupported());
