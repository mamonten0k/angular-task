import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

import { TabComponent } from '../../ui/tabs-item/tab.compontent';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;

  currTab?: TabComponent;

  ngAfterContentInit() {
    if (this.tabs) this.selectTab(this.tabs.first);
  }

  selectTab(tab: TabComponent) {
    if (this.currTab) this.currTab.active = false;

    this.currTab = tab;
    this.currTab.active = true;
  }
}
