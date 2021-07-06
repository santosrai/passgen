## Custom Command Line Password Generator
It's node js app that will generate the random password for you.

Derived from [Brad Traversy](https://github.com/bradtraversy/passgen)

### Installation
- Clone the repository
- run npm installation
``` 
    npm install 
```
- Test the command with
``` 
    node index 
```
- To create symlink to for "passgen"
```
    npm link
```

### Options
| Short | Long              | Description                     |
| ----- | ----------------- | ------------------------------- |
| -l    | --length <number> | length of password (default: 8) |
| -s    | --save            | save password to passwords.txt  |
| -nn   | --no-numbers      | remove numbers                  |
| -ns   | --no-symbols      | remove symbols                  |
| -h    | --help            | display help for command        |
| -V    | --version         | Show the version                |
