import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { PATH, NAV_MENU } from "./components/nav/nav.menu";

const routes: Routes = [
  {
    path: PATH.select,
    loadChildren: () =>
      import("./pages/select-demo/select-demo.module").then(
        mod => mod.SelectDemoModule
      )
  },
  {
    path: PATH.radio,
    loadChildren: () =>
      import("./pages/radio-demo/radio-demo.module").then(
        mod => mod.RadioDemoModule
      )
  },
  {
    path: PATH.card,
    loadChildren: () =>
      import("./pages/card-demo/card-demo.module").then(
        mod => mod.CardDemoModule
      )
  },
  {
    path: PATH.swiper,
    loadChildren: () =>
      import("./pages/swiper-demo/swiper-demo.module").then(
        mod => mod.SwiperDemoModule
      )
  },
  {
    path: PATH.scrollLoad,
    loadChildren: () =>
      import("./pages/scroll-load-demo/scroll-load-demo.module").then(
        mod => mod.ScrollLoadDemoModule
      )
  },
  {
    path: PATH.pagination,
    loadChildren: () =>
      import("./pages/page-demo/page-demo.module").then(
        mod => mod.PageDemoModule
      )
  },
  {
    path: PATH.multiSelect,
    loadChildren: () =>
      import("./pages/multi-select-demo/multi-select-demo.module").then(
        mod => mod.MultiSelectDemoModule
      )
  },
  {
    path: PATH.input,
    loadChildren: () =>
      import("./pages/input-demo/input-demo.module").then(
        mod => mod.InputDemoModule
      )
  },
  {
    path: PATH.calendar,
    loadChildren: () =>
      import("./pages/calendar-demo/calendar-demo.module").then(
        mod => mod.CalendarDemoModule
      )
  },
  {
    path: PATH.codegenerate,
    loadChildren: () =>
      import("./pages/code-generator/code-generator.module").then(
        mod => mod.CodeGeneratorModule
      )
  },
  {
    path: PATH.multiLang,
    loadChildren: () =>
      import("./pages/multi-lang-demo/multi-lang-demo.module").then(
        mod => mod.MultiLangDemoModule
      )
  },
  {
    path: PATH.request,
    loadChildren: () =>
      import("./pages/request-demo/request-demo.module").then(
        mod => mod.RequestDemoModule
      )
  },
  {
    path: PATH.iconText,
    loadChildren: () =>
      import("./pages/icon-text-demo/icon-text-demo.module").then(
        mod => mod.RequestDemoModule
      )
  },
  {
    path: "**",
    redirectTo: NAV_MENU[0].subMenu[0].path
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
