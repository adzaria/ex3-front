# Front et back séparé dans des repos différents + async await

Lorsque le projet devient trop gros, il convient de séparer radicalement le front et le back. Le front fait alors des requêtes vers le back (chez nous vers localhost:8080/ ) mais ils sont sur des repos différents. Le front peut alors soit exister sur son serveur propre (c'est le cas ici, un mini serveur sert le front), soit carrément être compilé et mis à disposition comme n'importe quel fichier sur un hébergeur ...	

### Le cas

Mon code ne marche pas :o ... lorsque j'appelle l'api, la liste qui est retournée est vide ... pourtant si je l'appelle une seconde fois ... ça marche ... !? (parfois ça peut marcher du premier coup  ... parfois non ...)	


## Ex 1 

Faire en sorte qu'on soit certain que l'api renvoie la liste du premier coup dans tous les cas	


## Ex 2

Super, maintenant on veut ajouter un bouton qui permets de cacher / faire apparaitre la liste des personnages en temps réel ( rendu conditionel )

## Ex 3

Créer un composant `addCharacter` contenant un formulaire simple avec un seul input et un button d'envoie pour pouvoir ajouter un nouveau personnage à la suite de la liste
dans ce composant vous devez faire une requete 'POST' vers l'url suivante : 'http://localhost:8080/add/character' (le service est déjà créé) en envoyant la valeur de l'input à chaque fois qu'on appuie sur le bouton d'ajout

## Ex 4

Génial, on peut maintenant ajouter un nouveau personnage mais j'aimerais une petite indication à partir du moment auquel j'appuie sur le bouton jusqu'au moment ou le personnage est bien entré en base de donnée ( afficher un div par dessous le site indiquant le chargement elle doit disparaitre dès que la requete est resolu )

Pour faire ça tu vas ajouter une state dans l'App : `isLoading`, c'est un boolean, si il est true on veut que la div du chargement s'affiche sinon non. ( attention le isLoading doit bien être dans l'app et non dans le composant addCharacter )
Tu vas ensuite créer une méthode dans l'App que tu vas devoir envoyer dans le composant enfant : `toggleLoading`, cette méthode doit toggle le state de L'App

## Ex 5

On veut maintenant faire un second front pour l'admin. Mais on veut que ce front fasse ses requêtes au même back ! (vers le même port)
Développe ce nouveau front avec une requête vers `http://localhost:8080/admin/ping`, qui doit bien récupérer ""pong"""	

(ici tu dois créer un nouveau repos en intégrant react, dans ce nouveau repos fait un requete en front vers /admin/ping pour vérifier que ça fonctionne)
