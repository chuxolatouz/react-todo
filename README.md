# DIOCESAN

### About how it work

This project is running under a docker container, by default is running on PORT=18080

### Run

If you're trying to run this project inside the docker seeder for DIOCESAN avoit this step.

Docker run the app once the build is finished on the port 18080, so in the explorer you can go to [linko](http://localhost:18080) this start to run the project in another different enviroments just do:

```
$ yarn & yarn start
```

### Add new packages to project

To add a new package we need to be inside the container

```
$ docker exec -ti diocesan-reactjs sh
```

Once inside container add the required package with yarn add

```
$ yarn add <package-name>
```

### Handle with Airbnb and Eslint errors

We're using Airbnb style guide on this project, Eslint on each running check all the files to match with the style guide, if there're some files without that parameters it will show an error on the explorer. We can tell eslint to fix that issues only doing this steps:

```
$ docker exec -ti diocesan-reactjs sh
```

Once inside container add the required package with yarn add

```
$ yarn lint
```

If eslint doesn't do that, we need to fix it manually.

### Extra

Every command related with the node modules or must be executed inside the component

```
$ docker exec -ti diocesan-reactjs sh
```
# react-todo
