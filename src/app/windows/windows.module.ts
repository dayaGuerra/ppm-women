import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowsRoutingModule } from './windows-routing.module';
import { WindowsComponent } from './windows.component';


@NgModule({
  declarations: [WindowsComponent],
  imports: [
    CommonModule,
    WindowsRoutingModule
  ]
})
export class WindowsModule { }
