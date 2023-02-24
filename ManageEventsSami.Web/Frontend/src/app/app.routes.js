"use strict";
exports.__esModule = true;
exports.ROUTES = void 0;
var app_guard_1 = require("./app.guard");
var layout_component_1 = require("./layouts/layout/layout.component");
var layout_nav_component_1 = require("./layouts/layout-nav/layout-nav.component");
exports.ROUTES = [
    {
        path: "",
        component: layout_component_1.AppLayoutComponent,
        children: [
            { path: "", loadComponent: function () { return Promise.resolve().then(function () { return require("./pages/auth/auth.component"); }).then(function (response) { return response.AppAuthComponent; }); } }
        ]
    },
    {
        path: "main",
        component: layout_nav_component_1.AppLayoutNavComponent,
        canActivate: [app_guard_1.AppGuard],
        children: [
            { path: "files", loadComponent: function () { return Promise.resolve().then(function () { return require("./pages/files/files.component"); }).then(function (response) { return response.AppFilesComponent; }); } },
            { path: "form", loadComponent: function () { return Promise.resolve().then(function () { return require("./pages/form/form.component"); }).then(function (response) { return response.AppFormComponent; }); } },
            { path: "home", loadComponent: function () { return Promise.resolve().then(function () { return require("./pages/home/home.component"); }).then(function (response) { return response.AppHomeComponent; }); } },
            { path: "list", loadComponent: function () { return Promise.resolve().then(function () { return require("./pages/list/list.component"); }).then(function (response) { return response.AppListComponent; }); } }
        ]
    },
    {
        path: "**",
        redirectTo: ""
    }
];
//# sourceMappingURL=app.routes.js.map