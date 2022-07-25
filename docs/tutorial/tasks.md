# Stencila Tasks

## About

Welcome to the tutorial for Stencila Tasks. This document introduces core concepts, and shows you how to use tasks in your Stencila project. See the task [HOWTOs](../howto/tasks) for quick tips and the tasks [reference documentation](../reference/tasks/) for more details.

<!-- ## Introduction -->

## Getting started

The quickest way to get started with tasks for your project is to run the `detect` subcommand,

```console
$ stencila tasks detect
```

This scans the files in your project, determines which tasks are needed, and creates a `Taskfile.yaml`, which if your project folder is empty it should look something like this,

```yaml
version: '3'

includes:
  lib:
    taskfile: '.stencila/tasks'
    autogen: true
```

In addition to creating `Taskfile.yaml`, Stencila will copy its library of Taskfiles into the `.stencila/tasks` folder inside your project. As we will see, this makes the library available to use inside you project's custom Taskfile.

Let's go over the Taskfile's properties:

- `version`: specifies the version of the Taskfile schema
- `includes`: other Taskfiles to be included in the project's Taskfile
  - `lib`: the namespace to be given to the included library tasks
    - `taskfile`: the location of the included Taskfile, in this case `.stencila/tasks/Taskfile.yaml`
    - `autogen`: indicates that this include was automatically generated

In the rest of this tutorial we show you how Stencila can automatically detect which tasks are needed and add them to your project's `Taskfile`. However, remember that you can always add your own tasks to augment those added by Stencila, or take over the authoring of tasks that Stencila has generated.

The `autogen` flags is used to indicate that a task was automatically generated and that it is OK for Stencila to update or remove it (if it is no longer necessary). If you want to take over authoring of a task, remove the `autogen` flag. The same applies to `includes`.

So far that's pretty boring: all we've done is bootstrap a pretty empty `Taskfile.yaml`. Soon we'll add some tasks that do useful things! But first lets look at how to list and run tasks.

## Listing tasks

You can get a list of task in the project's Taskfile using,

```console
$ stencila task list
```

By default, only the tasks defined in the `Taskfile.yaml` itself are show. To include all available tasks including those in the task library, use the `--all` option. You can also filter by task "topic" and "action"

```console
$ stencila task list --all --topic python
```

## Running tasks

You can run a task just by providing its name (you can leave off the `lib` namespace prefix if your project does not have a task with the same name):

```console
$ stencila python:install
```

Some tasks take parameters, supply them like so,

```console
$ stencila poetry:add package=pandas version=1.1.0
```

If a parameter value has spaces, enclose it in quotes e.g,

```console
$ stencila greet greeting="Hello, world!"
```

You can also run more than one task at a time, including with parameters:

```console
$ stencila pip:add package=numpy version=1.23.0 renv:install package=ggplot2
```

If by chance you want to run a task which has the same name as one of Stencila's top level subcommands (e.g. `convert`; see `stencila --help` for a full list), or if you want to set one of the other run options, then you will need to use the `stencila tasks run` subcommand e.g.

```console
$ stencila tasks run convert --taskfile other.yaml
```

## Installation tasks

All projects involving executable code require dependencies to run that code. In this section we'll look at how to create tasks to install those dependencies.

### Auto-generating installation tasks

To illustrate how Stencila can autogenerate install tasks, let's add a Python script to our project,

```console
$ ls
analyze.py  Taskfile.yaml
```

Now, we'll run the `detect` subcommand again and find that our `Taskfile.yaml` looks something this this (depending on the version of Stencila):

```yaml
version: '3'

includes:
  lib:
    taskfile: '.stencila/tasks'
    autogen: true

tasks:
  install:
    desc: Install tools and packages
    summary: Autogenerated task to run all install tasks that were detected.
    autogen: true
    cmds:
      - task: 'lib:python:install'

  build:
    desc: Build the project
    summary: Autogenerated task to run other tasks to build the project.
    autogen: true
    cmds:
      - task: install
```

Let's go over the new properties that have been added:

- `tasks`: tasks for the project
  - `install` / `build`: the name of the task
    - `desc`: a short description of the task
    - `summary`: a longer summary of the task
    - `autogen`: indicates that this task was automatically generated
    - `cmds`: a list of commands to run for this task
      - `task`: specifies that the `python:install` task should be run

In summary, Stencila detected a `*.py` file in the project and, added the `lib:python:install` task to a newly created `install` task for the project. It also created a `build` task for the project which calls the `install` task.

### Installing tools

We can now run our new auto-generated project `install` task,

```console
$ stencila install
```

The [`python:install`](../reference/tasks/python.md#install) task that is run as part of that task, will use `asdf` to install the latest version of Python, and reference in a new `.tool-versions` file in your project:

```yaml
# .tool-versions
python 3.10.5
```

At a later date, we might want to upgrade to the version of Python.

```console
$ stencila python:upgrade
```

### Specifying dependencies

So far, we've setup the project to use the latest version of Python but our `analyze.py` file is empty; it doesn't actually do anything. Let's analyze some weather data using Pandas, the popular Python package for data analysis.

Add a `requirements.txt` file and declare the Python packages that we need in our project (for now just Pandas),

```
pandas==1.4.3
```

Alternatively run the `pip:install` task to do that for you,

```console
$ stencila pip:add package=pandas version=1.4.3
```

Now, we'll run `detect` again and find that Stencila has added a new sub-task to the project's `install` task:

```diff
tasks:
...
+       - task: "lib:pip:install"
```

### Bypassing tasks and using tools directly

Stencila Tasks are mostly simple shortcuts to tools such as `asdf` and `pip` (with some niceties to ensure that the tools themselves are installed and to avoid unnecessarily running commands). You are not locked into using tasks and at any time can bypass them and use those tools directly. For example, instead of upgrading to the latest version of Python using,

```console
$ stencila python:install
```

you could instead use `asdf` directly,

```console
$ asdf plugin add python
$ asdf install python latest
$ asdf local python latest
```

Or, as we have seen instead of adding a new Python package using,

```console
$ stencila pip:add package=numpy version==1.23.0
```

you could edit the `requirements.txt` file directly and run

```console
$ pip install -r requirements.txt
```