# pneumatic-pipelines

[![Build Status](https://travis-ci.org/AlekseyLeshko/pneumatic-pipelines.svg?branch=master)](https://travis-ci.org/AlekseyLeshko/pneumatic-pipelines)

Enhancer for [bitbucket-pipelines](https://bitbucket.org/product/features/pipelines)

## Why pneumatic pipelines?
 * Pipelines as code, use javascript.
 * Each step it's a unique object, power of [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
 * Generation a valid yaml file based on json object
 * Presets of steps

Soon in the new versions

 * [bitbucket-pipelines](https://bitbucket.org/product/features/pipelines) rules support
 * Sorting props in object

## CLI
```javascript
pneumatic-pipelines filename.js
```

## Motivation
Frequently pipelines file include repeating steps with minimal changes or without them. For example step for run unit tests.
You also use environment variables, the same variables each time.
And finally, all these branches, steps and variables need support and empowerment.
If your config files more then 300 lines, you must try this solution.

## Roadmap
- [ ] Sorting props in object
- [ ] Add examples
  - [ ] Add demo repo on [bitbucket](https://bitbucket.org)
- [ ] Add methods for default, tags, branches, custom
- [ ] Add CI
  - [ ] [circleci](https://circleci.com))
- [ ] Rules support
  - [ ] Add condition for number of steps in branch, less then 10 steps
