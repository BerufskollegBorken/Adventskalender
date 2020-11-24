# Adventskalender

## Das Ziel
Unser Ziel ist die Programmieurung eines eigenen Adventskalenders für die BKB Homepage.

## Der Weg

Da wir es in der Kürze der Zeit nicht schaffen einen eigenen Kalender zu programmieren, greifen wir in Github auf eine Vorlage (`https://github.com/hongkiat/advent-calendar`) zurück. Die Prüfung der Lizenzbedingungen gibt Klarheit, dass wir den Quelltext nehmen und verändern und verwerten dürfen. Nur wenn die Lizenzbedingungen eine freie Verwendung und Veränderung zulassen, kommt der Adventskalender für unsere Zwecke infrage. Das ist in `GNU GENERAL PUBLIC LICENSE` gegeben.
Also bitte das Projekt im VSC klonen. Wer das Projekt danach zu seinem eigenen Projekt machen möchte, muss selbst in Github ein Projekt anlegen, das dann klonen und alle Dateien (bis auf .git) vom Originalordner in den eigenen Ordner schieben.

#### How to Test the Calendar before December?

In order to test the Calendar before December, please comment out the month checker in the `/scripts/calendar.js` file, in *line 24* in the following way:

```javascript
if( /* ( currentDate.getMonth() + 1 ) < 12 || */ currentDate.getDate() < day ) {
```

Danach kann die `index.html` direkt im Browser geöffnet werden.



### Schritt 1:

In der ```index.html``` muss alles an unsere Zwecke angepasst werden. Beispielsweise kann ein anderes Bild in den Hintergrund gelegt werden. Aber Vorsicht: Auch für Bilder gelten Lizenzen. Bei großen Dateien muss zudem noch komprimiert werden und / oder geschnitten werden. Das geht mit Online-Tools oder mit Windows-Bordmitteln. Am besten bei dem Originalbild die Abmessungen / Bildgröße vorher auslesen und dann die eigene Datei entsprechend anpassen. 

Der `<header> ... </header>` kann entfernt werden. Später werden wir nur den Kalender selbst verwerten. 

Die `<ul id="adventDoors"></ul>` sind eine unsortierte Liste, die durch die `CSS`-Datei zu der Tabellenstruktur umgebaut werden. Das Schlüsselwort in der CSS-Datei, mit dem diese Umwandlung vorgenommen wird, heißt `flex`.

Zwei Scriptdateien werden eingebunden. Die Datei 
```Javascript
<script src="scripts/messages.js"></script>
```
enthält alle Sprüche. Die Datei
```Javascript
<script src="scripts/calendar.js"></script>
``` 
enthält die Logik. Konkret erstellt sie beim Aufruf alle 24 Türchen mit ihren Abmessungen und mit ihrer Funktion.

### Schritt 2:

Die ```messages.js``` enthält alle *Daten* dieses Projekts. In der ```messages.js``` ist eine einzige Zuweisung programmiert. Die Liste der Sprüche wird der Variablen ```messages``` zugewiesen. Diese Art Liste nennt man in der Programmierung Array. Man erkennt ein Array an den umschießenden eckigen Klammern. Die Werte innerhalb des Arrays sind durch Kommas getrennt. Da jeder Spruch aus einem Text und dem Autor besteht, sind innerhalb des besagten Arrays noch 24 weitere Arrays, bei denen Text und Autor wiederum durch Komma getrennt sind. 
Jeder einzelne Wert kann nun über seinen Index aufgerufen werden. Änderungen der Sprüche werden hier sofort wirksam. Wenn wir später neben dem Spruch und dem Namen noch ein Bild für jeden Tag verlinken möchten, müsseen wir den inneren Arrays durch Komma getrennt ein weiteres Element hinzufügen:
```Javascript
["There is nothing ...", "Charles Dickens", "https://.../bild1.jpg"]
```

### Schritt 3:

Die *Logik* des Programms steckt in der ```calendar.js```. 
In Zeile 1 wird das `adventCal`-Objekt aus der Homepage ausgelesen und mit all seinen Eigenschaften der Variablen `myCal` zugewiesen. Wenn Sie ```console.log(myCal)``` in der Zeile 2 einsetzen und dann die index.html im Browser neu laden, wird auf der Browserconsole (die öffnet man mit der Funktionstaste `F12`) das `adventCal`-Objekt geloggt. Sie können dann erkennen, dass das `adventCal`-Objekt das Hintergrundbild mit seinen Abmessungen usw. repräsentiert. 
In Zeile 2 wird das aktuelle Datum in die Variable currentDate eingelesen.

> Am besten danach das `console.log(..)` wieder entfernen, damit die Zeilenangaben weiter unten noch passen.

Erkennen Sie in Zeile 4 die 3 Pünktchen unter `Door`? Gehen Sie mit der Maus darauf und wählen Sie `schnelle Problembehebung`. Jetzt erkennen Sie hier eine Klassendefinition.  Eine Klasse ist -bekanntermaßen- ein Bauplan. Hier also ein Bauplan einer Tür. Beim Aufruf des Konstruktors wird ein Objekt der Klasse erzeugt. Für das Erzeugen eines Objekts vom Typ `Door` bedarf es der Angabe zweier Parameter: `calendar` & `day`. Die Parameter sind sozusagen die Zutaten, ohne die kein Tür-Objekt erzeugt werden kann.

Da ein Adventskalender 24 Türen hat, muss der Konstruktor 24x aufgerufen werden. Das geschieht ab Zeile 45. Dort wird zunächst eine `for`-Schleife 24x durchlaufen. Innerhalb der Schleife wird der Konstruktor `new Door(myCal, i + 1)` 24x aufgerufen. Als erster Parameter wird das `adventCal`-Objekt (siehe oben) an den Konstruktor übergeben. Als zweiter Parameter wird der Wert von `i` hochgezählt und übergeben. Nachdem die Schleife abgearbeitet wurde, enthält das `doors`-Array dann also alle 24 Türchen-Objekte mit all den individuellen Eigenschaften. Das kann man im Browser wieder wunderbar mitloggen, indem ```console.log(doors)``` nach der Schleife eingebaut wird.

#### Was passiert nun beim Aufruf des Konstruktors in seinem Inneren?

Eine Tür hat mehrere Eigenschaften. Die werden in den Zeilen 7 - 11 initialisiert. Die Maße und Positionen sind von den Maßen des Hintergrundbildes abhängig. Die `adventMessage` bekommt als Tag den Wert von `i + 1` zugewiesen. Weiterhin gehört zur `adventMessage` der passende Spruch aus der ```messages.js```, also aus dem `messages`-Array. In den eckigen Klammern `[day - 1]` wird der Spruch des jeweiligen Tages ausgewählt. Die eckigen Klammern dahinter `[0]` geben an, dass der Spruch und nicht etwa der Autor ausgegeben werden soll. Der Autor wird über `[1]` ausgelesen. 

Zu jedem Tür-Objekt, dessen Maße und dessen Spruch nun initialisiert ist, gehört weiterhin eine `content`-Funktion. 

 Weil natürlich nicht jede Tür dieselben Koordinaten haben kann, wird deutlich, dass der Parameter `calendar` bei jeder der Erzeugung jeder einzelnen Tür unterschiedlich sein muss. In Zeile 47 sehen Sie, was als Parameter in den Konstruktor gegeben wird. Nämlich zum einen das `adventCal`-Objekt (siehe oben) und zum anderen eine Zahl zwischen 1 und 24.

 ##### Der Alert

 Der `Alert` ist das PopUp, das bei Klick auf das Türchen öffnet. Der vorgegebene Alert ist praktikabel, aber nicht sehr schön anzusehen. Wiederum bei Github gibt es Projekte mit viel schöneren Alerts: https://sweetalert2.github.io/#examples.  

Um die Alerts dieser Seite nutzen zu können, muss in die `index.html` das Skript eingebunden werden: 

```Javascript
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
```
Anschließend kann der Alert wunderbar ersetzt werden. Beispiel:

```Javascript
    //alert(adventMessage);
    Swal.fire({
        title: adventMessage,
        width: 600,
        padding: '3em',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: '#fff url(/images/trees.png)',
        backdrop: `
            rgba(0,0,123,0.4)
            url("http://clipart-library.com/img/973913.gif")
            left top
            repeat
        `
        })
```

In dem Beispiel ist bereits einiges verändert worden. Z.B. fallen jetzt Schneeflocken. Dies wird mit einem `GIF`-Bild (http://clipart-library.com/img/973913.gif) erreicht sowie mit dem Schalter repeat. Passen Sie alle Bilder nach eigenen Vorstellungen unter Beachtung der Lizenzbedingungen an! Eine geeignete Lizenzbedingungen bei Bildern heißt `Creative Commons`.  

### Schritt 4:

Die Sprüche müssen angepasst werden. 24 stimmungsvolle Hintergundbilder müssen ein