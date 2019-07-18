import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PaginationApiService } from './services/pagination-api.service/pagination-api.service';
import { ApiService } from './services';
import 'hammerjs';

@NgModule({
  imports: [
    HttpModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        PaginationApiService
      ]
    };
  }
}
