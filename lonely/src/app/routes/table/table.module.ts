import {ExpandTabaleCompoent} from "./expand-table/expand-tabale.compoent";
import {DemoTableComponent} from "./sim-table/demo-table.component";
import {SharedModule} from "@shared/shared.module";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const TABLEMODULAR=[DemoTableComponent,ExpandTabaleCompoent];

const routes: Routes=[
    { path: 'simtable', component: DemoTableComponent },
    { path: 'expandtable', component:ExpandTabaleCompoent}
];



@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ...TABLEMODULAR
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})

export class  TableModule { }
