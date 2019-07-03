import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApplicationPhotoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ApplicationPhotoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ApplicationPhotoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationPhotoSharedModule {
  static forRoot() {
    return {
      ngModule: ApplicationPhotoSharedModule
    };
  }
}
