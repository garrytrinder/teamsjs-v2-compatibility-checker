import { Button, Flex } from "@fluentui/react-northstar";
import { pages } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Pages = () => {
    // check to see if capability is supported
    // see TabConfig.tsx for more details on pages.config namespace usage
    if (!pages.isSupported()) { return (<></>); }
    // check to see if navigating back is supported
    if (pages.backStack.isSupported()) {
        // register back button event handler
        pages.backStack.registerBackButtonHandler(() => {
            console.log("Back button pressed");
            return true;
        });
    }
    // check to see if app button is supported
    if (pages.appButton.isSupported()) {
        // register handler for hover over event
        pages.appButton.onHoverEnter(() => {
            console.log("onHoverEnter");
        });
        // register handler for hover out event
        pages.appButton.onHoverLeave(() => {
            console.log("onHoverLeave");
        });
        // register handler for click event
        pages.appButton.onClick(() => {
            console.log("onClick");
        });
    }
    // register handler for full screen event on a tab
    pages.registerFullScreenHandler(() => {
        console.log("fullScreenHandler");
    });

    return (
        <Flex gap="gap.small" vAlign="center">
            {pages.backStack.isSupported() &&
                <Button onClick={async () => {
                    await pages.backStack.navigateBack()
                }}>
                    Navigate Back
                </Button>
            }
            {pages.currentApp.isSupported() &&
                // 🤷🏻‍♂️ returns false in Teams
                <Button onClick={async () => {
                    pages.currentApp.navigateTo({
                        pageId: 'privacy1'
                    });
                }}>
                    Navigate To
                </Button>
            }
            {pages.tabs.isSupported() &&
                <>
                    <Button onClick={async () => {
                        const config = await pages.tabs.getTabInstances();
                        console.log(config)
                    }}>
                        Get tab instances
                    </Button>
                    <Button onClick={async () => {
                        const config = await pages.tabs.getMruTabInstances();
                        console.log(config);
                    }}>
                        Get Most Recently Used tab instances
                    </Button>
                    <Button onClick={async () => {
                        // only works for channel tabs, see
                        // https://stackoverflow.com/questions/62390440/msteams-development-navigate-between-personal-tabs
                        const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
                        // deprecated? check docs
                        await pages.tabs.navigateToTab({
                            tabName: 'privacy1',
                            entityId: 'privacy1',
                            url: `${baseUrl}/index.html#/privacy`,
                            websiteUrl: `${baseUrl}//index.html#/privacy`
                        });
                    }}>
                        Navigate to tab
                    </Button>
                    <Button onClick={async () => {
                        // navigate to the Apps tab in the Developer Portal app
                        await pages.navigateToApp({
                            appId: '14072831-8a2a-4f76-9294-057bf0b42a68',
                            pageId: '72c73d2e-a890-4580-9c68-513c8cb6efcd'
                        })
                    }}>
                        Navigate to app
                    </Button>
                    <Button onClick={async () => {
                        pages.returnFocus(true);
                    }}>
                        Return focus to search box
                    </Button>
                    <Button onClick={async () => {
                        // TODO: Implement deeplink
                        //pages.shareDeepLink({})
                    }}>
                        Share Deep Link
                    </Button>
                </>
            }
        </Flex>
    )
}

export const PagesIsSupported = () => booleanToString(pages.isSupported());
