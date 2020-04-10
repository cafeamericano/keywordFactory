import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllKeywordsComponent } from './all-keywords/all-keywords.component'
import { KeywordDetailsComponent } from './keyword-details/keyword-details.component'

const routes: Routes = [
    { path: 'allkeywords', component: AllKeywordsComponent},
    { path: 'allkeywords/keyworddetails/:id', component: KeywordDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
    AllKeywordsComponent,
    KeywordDetailsComponent
]