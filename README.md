# Adventskalender

## Das Ziel
Unser Ziel ist die Programmieurung eines eigenen Adventskalenders für die BKB Homepage.

## Der Weg

Da wir unmöglich in der Kürze der Zeit einen eigenen Kalender programmieren können, greifen wir in Github auf eine Vorlage (`https://github.com/hongkiat/advent-calendar`) zurück. Die Prüfung der Lizenzbedingungen gibt Klarheit, ob wir den Quelltext nehmen und verändern dürfen. Nur wenn die Lizenzbedingungen eine freie Verwendung und Veränderung zulassen, kommt der Adventskalender für unsere Zwecke infrage. Das ist in `GNU GENERAL PUBLIC LICENSE` gegeben.

### Schritt 1:

In der ```index.html``` muss alles an unsere Zwecke angepasst werden. Beispielsweise kann ein anderes Bild in den Hintergrund gelegt werden. Aber Vorsicht: Auch für Bilder gelten Lizenzen. Bei großen Dateien muss zudem noch komprimiert werden und / oder geschnitten werden. Das geht mit Online-Tools oder mit Windows-Bordmitteln. Am besten bei dem Originalbild die Abmessungen / Bildgröße vorher auslesen und dann die eigene Datei entsprechend anpassen. 

Der `<header> ... </header>` kann entfernt werden. Später werden wir nur den Kalender selbst verwerten. 

Die `<ul id="adventDoors"></ul>` sind eine unsortierte Liste, die durch die `CSS`-Datei zu der Tabellenstruktur umgebaut werden. Das Schlüsselwort in der CSS, das diese Umwandlung vornimmt, heißt `flex`.

Zwei Scriptdateien werden eingebunden. Die Datei 
```Javascript
<script src="scripts/messages.js"></script>
```
enthält alle Sprüche. 

### Schritt 2:

Die ```messages.js``` enthält alle Daten dieses Projekts. In der ```messages.js``` ist eine einzige Zuweisung programmiert. Die Liste der Sprüche wird der Variablen ```messages``` zugewiesen. Diese Art Liste nennt man in der Programmierung Array. Man erkennt ein Array an den umschießenden eckigen Klammern. Die Werte innerhalb des Arrays sind durch Kommas getrennt. Da jeder Spruch aus einem Text und dem Autor besteht, sind innerhalb des besagten Arrays noch 24 weitere Arrays, bei denen Text und Autor wiederum durch Komma getrennt sind. 
Jeder einzelne Wert kann nun über seinen Index aufgerufen werden. Änderungen der Sprüche werden hier sofort wirksam.

### Schritt 3:

Die Logik des Programms steckt in der ```calendar.js```. 
In Zeile 1 wird das calender-Objekt `adventCal` aus der Homepage ausgelesen und der Variablen `mayCal` zugewiesen.
In Zeile 2 wird das aktuelle Datum in die Variable currentDate eingelesen.

Erkennen Sie in Zeile 4 die 3 Pünktchen unter `Door`? Gehen Sie mit der Maus da drauf und wählen Sie schnelle Problembehebung. Jetzt erkennen Sie hier eine Klassendefinition. Eine Klasse ist -bekanntermaßen- ein Bauplan. Hier also ein Bauplan einer Tür. Beim Aufruf des Konstruktors wird ein Objekt der Klasse erzeugt. Für das Erzeugen eines Objekts vom Typ `Door` bedarf es der Angabe zweier Parameter: calendar, day.


This is a regular Advent Calendar built in JS, with 24 doors for the days of Advent (Dec 1 - Dec 24). A door can only be opened **on** or **after** the specific date on it.
This means that the Calendar is **inactive before December**.


## How to Test the Calendar before December?


In order to test the Calendar before December, please comment out the month checker in the `/scripts/calendar.js` file, in *line 24* in the following way:

```javascript
if( /* ( currentDate.getMonth() + 1 ) < 12 || */ currentDate.getDate() < day ) {
```

This way the Calendar will only check the day of the current month, but not the current month of the year, so it can be tested before December.

## Demo

You can find demo on [http://hongkiat.github.io/advent-calendar/](http://hongkiat.github.io/advent-calendar/)
