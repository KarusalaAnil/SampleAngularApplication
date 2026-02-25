home :
    String Interpolation {{}}
    one way data binding , two way data binding ,event binding and property binding.
    parent child relation : Data passing Parent to child and Child to Parent (@Input , @Output , => core module)
    
    {{}},@Input , @Output ,EventEmitter

home and employeer module with Routing enabled :
Enabled routing with router injection (Router = > router module).

    constructor(private router : Router){}

Shared Module: Created this for common for All required modules (Common module included => commons module => support all angular)
FormModule 

Child routing :
    Home = > display componet : 
    {
        path: 'display', component: DisplayComponent,
        children: [
        {
            path: 'child-route', component: ChildRouteComponent
        }

        ]
    },

Angular life cycle Hooks:
    Employeer module => company leave component

        company-leaves.component.ts:12 constructor loaded
        company-leaves.component.ts:38 ngOnInit called
        company-leaves.component.ts:35 ngDoCheck called
        company-leaves.component.ts:32 ngAfterContentInit called
        company-leaves.component.ts:29 ngAfterContentChecked called
        company-leaves.component.ts:26 ngAfterViewInit called
        company-leaves.component.ts:23 ngAfterViewChecked called
        company-leaves.component.ts:35 ngDoCheck called
        company-leaves.component.ts:29 ngAfterContentChecked called
        company-leaves.component.ts:23 ngAfterViewChecked called
        company-leaves.component.ts:35 ngDoCheck called
        company-leaves.component.ts:29 ngAfterContentChecked called
        company-leaves.component.ts:23 ngAfterViewChecked called










# SampleApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
