# Command Line Password Generator

Node.js command line app to generate random passwords

:red_circle: This code come from traversy media tutorial [passgen](https://github.com/bradtraversy/passgen), except, I used Node.js ES Module instead of CommonJS code.
I hope you like it :smile:

## Usage

Install dependencies

```
npm install
```

Run file

```
node index (options)
```

To create a symlink to run "pswdgen" from anywhere

```
npm link

# Now you can run
pswdgen (options)

# To remove symlink
npm unlink
```

## Options

| Short | Long              | Description                     |
| ----- | ----------------- | ------------------------------- |
|       | --length <number> | length of password (default: 8) |
| -s    | --save            | save password to passwords.txt  |
| -nn   | --no-numbers      | remove numbers                  |
| -ns   | --no-symbols      | remove symbols                  |
| -h    | --help            | display help for command        |
| -V    | --version         | Show the version                |
