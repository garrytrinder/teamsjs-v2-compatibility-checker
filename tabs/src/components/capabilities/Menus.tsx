import { Button, Flex } from "@fluentui/react-northstar";
import { menus } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Menus = () => {
    // check to see if capability is supported
    if (menus.isSupported()) {
        menus.initialize();
        return (
            <Flex gap="gap.small" vAlign="center">
                <Button onClick={async () => {
                    menus.setUpViews([
                        { id: "1", title: "View 1" },
                    ], (id: string) => {
                        console.log(id);
                        return true;
                    })
                }}>
                    Setup Views
                </Button>
                <Button onClick={async () => {
                    menus.setNavBarMenu([
                        { id: "1", title: "Item 1", icon: "emoji", enabled: true, selected: false },
                    ], (id: string) => {
                        console.log(id);
                        return true;
                    })
                }}>
                    Set Nav Bar Menu
                </Button>
                <Button onClick={async () => {
                    menus.showActionMenu({
                        items: [
                            { id: "1", title: "Item 1", icon: "emoji", enabled: true, selected: false },
                        ], title: "Menu Title"
                    }, (id: string) => {
                        console.log(id);
                        return true;
                    })
                }}>
                    Show Action Menu
                </Button>
            </Flex>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const MenusIsSupported = () => booleanToString(menus.isSupported());
