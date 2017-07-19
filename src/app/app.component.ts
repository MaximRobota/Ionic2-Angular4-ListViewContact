import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Http } from '@angular/http';
import { ListItem } from './lists/list-item.component';
import { OnInit } from '@angular/core';

import 'rxjs/add/operator/map';

@Component({
  template: `
    
    <ion-content padding>
  <h2>With <span>Single Column</span></h2>
  <vertical-list [items]="items"></vertical-list>


  <h2>With <span>Table</span></h2>
  <table-list [items]="items"></table-list>

  <h2>Loading in <span>Chunks</span></h2>
  <list-with-api [items]="items"></list-with-api>

</ion-content>`
})
export class MyApp implements OnInit {

  protected items: ListItem[];

  protected readonly codeListWithApi = `
        import { ChangeEvent } from '@angular2-virtual-scroll';
        ...

        @Component({
            selector: 'list-with-api',
            template: \`
                <virtual-scroll [items]="buffer" (update)="scrollItems = $event"
                    (change)="onListChange($event)">

                    <list-item *ngFor="let item of scrollItems" [item]="item"> </list-item>
                    <div *ngIf="loading" class="loader">Loading...</div>

                </virtual-scroll>
            \`
        })
        export class ListWithApiComponent implements OnChanges {

            @Input()
            items: ListItem[];

            protected buffer: ListItem[] = [];
            protected loading: boolean;

            protected onListChange(event: ChangeEvent) {
                if (event.end !== this.buffer.length) return;
                this.loading = true;
                this.fetchNextChunk(this.buffer.length, 10).then(chunk => {
                    this.buffer = this.buffer.concat(chunk);
                    this.loading = false;
                }, () => this.loading = false);
            }

            protected fetchNextChunk(skip: number, limit: number): Promise<ListItem[]> {
                return new Promise((resolve, reject) => {
                    ....
                });
            }
        }
    `.replace(/^        /mg, '');

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ngOnInit() {
    this.http.get('assets/data/items.json')
      .map(response => response.json())
      .subscribe(data => this.items = data);
  }
}

