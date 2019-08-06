import { NgModule } from '@angular/core';
import { MenuListComponent } from './menu-list/menu-list';
import {IonicModule} from 'ionic-angular';
import { TwoComponent } from './two/two';
@NgModule({
	declarations: [MenuListComponent,
    TwoComponent],
	imports: [IonicModule],
	exports: [MenuListComponent,
    TwoComponent]
})
export class ComponentsModule {}
