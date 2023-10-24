1 - npm install
2 - creer un fichier .babelrc à la racine du projet

dans ce fichier .babelrc
{
"presets": [
["@babel/preset-env", { "targets": "> 0.25%, not dead" }]
]
}

3 pour lancer les tests npx jest
