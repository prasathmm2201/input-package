# eslint

1.npm init @eslint/config - airbnb config

# prettier

1.npm install --save-dev --save-exact prettier
2.node --eval "fs.writeFileSync('.prettierrc','{}\n')"
3.create prettierignore file
4.add script

# husky

1.npx husky-init && npm install

{
"root": true,
"env": {
"browser": true,
"es2021": true,
"jest": true
},
"extends": [
// "airbnb",
"react-app",
"react-app/jext",
"eslint:recommended",
"plugin:react/recommended",
"plugin:react/jsx-runtime",
"plugin:react-hooks/recommended"
],
"ignorePatterns": ["dist", ".eslintrc.json"],
"parserOptions": {
"ecmaVersion": "latest",
"sourceType": "module"
},
"settings": {
"react": {
"version": "18.2"
}
},
"plugins": ["react-refresh"],
"rules": {
"quotes": [
"error",
"double",
{
"avoidEscape": true
}
],
"react-refresh/only-export-components": [
"warn",
{
"allowConstantExport": true
}
]
}
}
