# Changelog

## 2.0.0 (2024-12-12)


### ⚠ BREAKING CHANGES

* drop Node.js < 14 support

https://github.com/eggjs/egg/issues/5257

<!-- This is an auto-generated comment: release notes by coderabbit.ai
-->

## Summary by CodeRabbit

- **New Features**
- Introduced a new function `ms` for converting human-readable time
formats into milliseconds.
- Added multiple GitHub Actions workflows for CI, testing, and
publishing automation.
	- Updated TypeScript configuration for improved type safety.
  
- **Bug Fixes**
- Removed outdated configuration files that could lead to linting errors
or CI issues.

- **Documentation**
- Updated `README.md` with new CI/CD references, installation
instructions, and contributor acknowledgments.
	- Added a license section with the MIT License.

- **Chores**
- Updated `package.json` with new dependencies and scripts for linting
and testing.

<!-- end of auto-generated comment: release notes by coderabbit.ai -->

### Features

* **index.js:** warn when result is undefined ([b89dae5](https://github.com/node-modules/humanize-ms/commit/b89dae54721120bab4ed10309d4d2c3d085b64e7))
* refactor with TypeScript ([#5](https://github.com/node-modules/humanize-ms/issues/5)) ([14964af](https://github.com/node-modules/humanize-ms/commit/14964afb11c0d9e6e4ee8e37585969867a673f22))


### Bug Fixes

* package.json to reduce vulnerabilities ([#3](https://github.com/node-modules/humanize-ms/issues/3)) ([3b6f1ba](https://github.com/node-modules/humanize-ms/commit/3b6f1bac6f5431c012d82e6336bdfc1926807b03))

1.2.1 / 2017-05-19
==================

  * fix: package.json to reduce vulnerabilities (#3)

1.2.0 / 2016-05-21
==================

  * feat: warn with stack

1.1.0 / 2016-04-04
==================

  * deps: upgrade ms to 0.7.0

1.0.1 / 2014-12-31
==================

  * feat(index.js): warn when result is undefined

1.0.0 / 2014-08-14
==================

  * init
