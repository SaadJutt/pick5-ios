import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { PlayingHistoryModule } from '../playing-history/playing-history.module';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsRoutingModule,
    PlayingHistoryModule
  ]
})
export class TabsModule { }
