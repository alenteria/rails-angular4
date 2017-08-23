# Bootstrap Ruby on rails & Angular 4

Starter app for ruby on rails and angular 4

### Software Requirements
  * NodeJs v6.10.3
  * Ruby on Rails 5.1.3
  * angular-cli 1.3.1

### Getting Started
    git clone git@github.com:alenteria/rails-angular4.git
    cd rails-angular4
    bin/bundle
    rails s
    bin/ng-serve
    open http://localhost:4200/
    bin/ng-build #to compile angularjs codes to public/ for production

Note: In development mode, you need to run rails s and bin/ng-serve. For production you only need rails server, compiled angular codes in public directory will be automatically accessible after bin/ng-build.