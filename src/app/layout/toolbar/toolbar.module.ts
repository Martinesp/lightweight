import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [BrowserModule, MatToolbarModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
