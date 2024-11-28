import { NgModule } from "@angular/core";
import { CompNoStandaloneComponent } from './comp-no-standalone/comp-no-standalone.component';

@NgModule({
  declarations: [CompNoStandaloneComponent],
  exports: [CompNoStandaloneComponent],
})
export class ComponentsNgModuleModule {}
