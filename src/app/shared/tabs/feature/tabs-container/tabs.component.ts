import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { TabComponent } from '../../ui/tabs-item/tab.compontent';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  currTab?: TabComponent;

  constructor(private route: ActivatedRoute) {}

  ngAfterContentInit() {
    if (this.tabs) {
      this.tabs.forEach((tab, index) => {
        tab.id = index;
      });

      this.route.queryParams.subscribe(params => {
        let tab = this.tabs.filter(tab => tab.id == params['tab'])[0];

        if (!tab) {
          tab = this.tabs.first;
        }

        this.selectTab(tab);
      });
    }
  }

  selectTab(tab: TabComponent) {
    if (this.currTab) this.currTab.active = false;

    this.currTab = tab;
    this.currTab.active = true;
  }
}
