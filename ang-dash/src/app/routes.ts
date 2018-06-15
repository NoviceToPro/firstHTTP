import { Component } from '@angular/core';

import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { StasticsComponent } from './components/stastics/stastics.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';

export const AppRoutes=[
    //path component login Component
    {path: "details", component: DetailPageComponent, children:[

        {path: 'about', component: AboutComponent},
        {path: 'statistics', component: StasticsComponent}

    ] }
]