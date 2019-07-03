import { NgModule } from '@angular/core';

import { ApplicationPhotoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ApplicationPhotoSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ApplicationPhotoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ApplicationPhotoSharedCommonModule {}
