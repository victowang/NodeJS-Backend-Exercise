# Exercice de création d'un Back-End NodeJS

Vous êtes un grossiste spécialisé dans les boissons. Vous recevez un email vous
informant que de nombreux fournisseurs de la planète sont contaminés par la Salmonelle.  
Après une étude approfondie, vous déterminez que les lots concernés ont une référence contenant un ’X’
ou un ’Y’. On vous demande :  
* de stabiloter la liste de vos produits concernés qui sont sur une page HTML pour un inven-
taire manuel des stocks.  
* d’envoyer au backend de rappel, situé à localhost:3000, les lots concernés par une
requête POST contenant la liste des réfèrences.  
* de réaliser, coté backend, un script qui va filtrer les lots dont la référence commence par ”A”
(code de la France) et de les enregistrer dans un fichier ”myOutput.txt.gz”.

## Ques-ce que c'est ? :
* Une page HTML `messtock.html` liée à `script.js` envoie au backend NodeJS les identifiants des données stabilotées par une méthode POST.
* Un script Python `postrequests.py` permet aussi de tester l'envoi de données (alternative à la page HTML)  
* Le Back-End `app.js` reçoit les données, éventuellement découpées en plusieurs packets TCP  
* Le Back-End traite les données par packet pour économiser l'utilisation mémoire, plutôt que de concaténer toutes les données dans un buffer puis de le traiter en un seul bloc.
* Les données recues par le Back-End sont filtrées puis écrites dans un fichier `myOutput.txt`  
* On peut zipper la sortie avec le script zip.js éxécutable avec commande : node zip.js ( je n'ai pas réussi à zipper correctement la sortie directement dans `app.js`)
## Compétences mobilisées :

* Manipulation des méthodes map et reduce sur les array JavaScript
* Traitement des données de la méthode POST par packets TCP, en faisant attention aux données coupées par le protocole