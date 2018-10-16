import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { EmployeeRoutingModule } from './employee-routing.module';
import * as fromServices from './services';
import { IsEmailValidator } from './validators/check-email-match.validator';

@NgModule({
  imports: [SharedModule, EmployeeRoutingModule],
  exports: [],
  declarations: [...fromContainers.containers, ...fromComponents.components, IsEmailValidator],
  providers: [...fromServices.services]
})
export class EmployeeModule {}
