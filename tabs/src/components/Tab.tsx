import { useContext, useEffect, useState } from "react";
import { TeamsFxContext } from "./Context";
import * as Fluent from "@fluentui/react-northstar";

import { AppInstallDialog, AppInstallDialogIsSupported } from "./capabilities/AppInstallDialog";
import { BarCode, BarCodeIsSupported } from "./capabilities/BarCode";
import { Calendar, CalendarIsSupported } from "./capabilities/Calendar";
import { Call, CallIsSupported } from "./capabilities/Call";
import { Chat, ChatIsSupported } from "./capabilities/Chat";
import { Dialog, DialogIsSupported } from "./capabilities/Dialog";
import { GeoLocation, GeoLocationIsSupported } from "./capabilities/GeoLocation";
import { Mail, MailIsSupported } from "./capabilities/Mail";
import { Menus, MenusIsSupported } from "./capabilities/Menus";
import { Monetization, MonetizationIsSupported } from "./capabilities/Monetization";
import { Pages, PagesIsSupported } from "./capabilities/Pages";
import { People, PeopleIsSupported } from "./capabilities/People";
import { Profile, ProfileIsSupported } from "./capabilities/Profile";
import { Search, SearchIsSupported } from "./capabilities/Search";
import { Sharing, SharingIsSupported } from "./capabilities/Sharing";
import { StageView, StageViewIsSupported } from "./capabilities/StageView";
import { TeamsCore, TeamsCoreIsSupported } from "./capabilities/TeamsCore";
import { Video, VideoIsSupported } from "./capabilities/Video";
import { WebStorage, WebStorageIsSupported } from "./capabilities/WebStorage";
import { App, AppIsSupported } from "./capabilities/App";

const Tab = () => {
  const { themeString } = useContext(TeamsFxContext);

  const header: Fluent.ShorthandValue<Fluent.TableRowProps> = {
    key: 'header',
    items: [
      { key: 'capability', content: 'Capability' },
      { key: 'supported', content: 'Supported' },
      { key: 'actions', content: 'Actions' }
    ]
  };

  const [showSupportedOnly, setShowSupportedOnly] = useState(true);
  const [tableRows, setTableRows] = useState([] as Fluent.ShorthandCollection<Fluent.TableRowProps, Record<string, {}>>);

  useEffect(() => {
    const defaultRows = [
      {
        key: 0,
        items: [
          { key: '0-1', content: 'App' },
          { key: '0-2', content: AppIsSupported() },
          { key: '0-3', content: <App /> }
        ]
      },
      {
        key: 1,
        items: [
          { key: '1-1', content: 'App Install Dialog' },
          { key: '1-2', content: AppInstallDialogIsSupported() },
          { key: '1-3', content: <AppInstallDialog /> }
        ]
      },
      {
        key: 2,
        items: [
          { key: '2-1', content: 'Bar Code' },
          { key: '2-2', content: BarCodeIsSupported() },
          { key: '2-3', content: <BarCode /> }
        ],
      },
      {
        key: 3,
        items: [
          { key: '3-1', content: 'Calendar' },
          { key: '3-2', content: CalendarIsSupported() },
          { key: '3-3', content: <Calendar /> }
        ],
      },
      {
        key: 4,
        items: [
          { key: '4-1', content: 'Call' },
          { key: '4-2', content: CallIsSupported() },
          { key: '4-3', content: <Call /> }
        ],
      },
      {
        key: 5,
        items: [
          { key: '5-1', content: 'Chat' },
          { key: '5-2', content: ChatIsSupported() },
          { key: '5-3', content: <Chat /> }
        ],
      },
      {
        key: 6,
        items: [
          { key: '6-1', content: 'Dialog' },
          { key: '6-2', content: DialogIsSupported() },
          { key: '6-3', content: <Dialog /> }
        ],
      },
      {
        key: 7,
        items: [
          { key: '7-1', content: 'Geo Location' },
          { key: '7-2', content: GeoLocationIsSupported() },
          { key: '7-3', content: <GeoLocation /> }
        ],
      },
      {
        key: 8,
        items: [
          { key: '8-1', content: 'Mail' },
          { key: '8-2', content: MailIsSupported() },
          { key: '8-3', content: <Mail /> }
        ],
      },
      {
        key: 9,
        items: [
          { key: '9-1', content: 'Menus' },
          { key: '9-2', content: MenusIsSupported() },
          { key: '9-3', content: <Menus /> }
        ],
      },
      {
        key: 10,
        items: [
          { key: '10-1', content: 'Monetization' },
          { key: '10-2', content: MonetizationIsSupported() },
          { key: '10-3', content: <Monetization /> }
        ],
      },
      {
        key: 11,
        items: [
          { key: '11-1', content: 'Pages' },
          { key: '11-2', content: PagesIsSupported() },
          { key: '11-3', content: <Pages /> }
        ],
      },
      {
        key: 12,
        items: [
          { key: '12-1', content: 'People' },
          { key: '12-2', content: PeopleIsSupported() },
          { key: '12-3', content: <People /> }
        ],
      },
      {
        key: 13,
        items: [
          { key: '13-1', content: 'Profile' },
          { key: '13-2', content: ProfileIsSupported() },
          { key: '13-3', content: <Profile /> }
        ],
      },
      {
        key: 14,
        items: [
          { key: '14-1', content: 'Search' },
          { key: '14-2', content: SearchIsSupported() },
          { key: '14-3', content: <Search /> }
        ],
      },
      {
        key: 15,
        items: [
          { key: '15-1', content: 'Sharing' },
          { key: '15-2', content: SharingIsSupported() },
          { key: '15-3', content: <Sharing /> }
        ],
      },
      {
        key: 16,
        items: [
          { key: '16-1', content: 'Stage View' },
          { key: '16-2', content: StageViewIsSupported() },
          { key: '16-3', content: <StageView /> }
        ],
      },
      {
        key: 17,
        items: [
          { key: '17-1', content: 'Teams Core' },
          { key: '17-2', content: TeamsCoreIsSupported() },
          { key: '17-3', content: <TeamsCore /> }
        ],
      },
      {
        key: 18,
        items: [
          { key: '18-1', content: 'Video' },
          { key: '18-2', content: VideoIsSupported() },
          { key: '18-3', content: <Video /> }
        ],
      },
      {
        key: 19,
        items: [
          { key: '19-1', content: 'Web Storage' },
          { key: '19-2', content: WebStorageIsSupported() },
          { key: '19-3', content: <WebStorage /> }
        ],
      }
    ];

    if (showSupportedOnly) {
      const rows = defaultRows.filter((r) => { return r.items[1].content === 'Yes' });
      setTableRows(rows);
    } else {
      setTableRows(defaultRows);
    }
  }, [showSupportedOnly]);

  return (
    <div className={themeString === "default" ? "" : "dark"}>
      <Fluent.Flex column={true} gap={"gap.small"} padding={"padding.medium"}>
        <Fluent.Segment>
          <Fluent.Checkbox
            label="Show supported only"
            checked={showSupportedOnly}
            onClick={() => setShowSupportedOnly(!showSupportedOnly)}
            toggle />
        </Fluent.Segment>
        <Fluent.Segment>
          <Fluent.Table
            aria-label="Static table"
            header={header}
            rows={tableRows} />
        </Fluent.Segment>
      </Fluent.Flex>
    </div>
  );
}

export default Tab;
