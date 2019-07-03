import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#ApplicationPhotoRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#ApplicationPhotoCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#ApplicationPhotoLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#ApplicationPhotoDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#ApplicationPhotoTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#ApplicationPhotoEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#ApplicationPhotoJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#ApplicationPhotoJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationPhotoEntityModule {}
