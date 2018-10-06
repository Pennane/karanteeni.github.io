# Karanteeni

Peruspaske sivut (HTML, CSS, JS) :D

## "Hei pukki, mullois vaan yks toive... että maailmassa olisi rauha"

ja sitten se, että kuka ikinä tätä lukeekaan ymmärtää nämä "ohjeet".

## Muokkaaminen

**Yleistä:** JavaScriptit löytyy kansiosta `vendor/js/`, taustakuvat (sekä yleensäkin muut kuvat) löytää kansiosta `assets/images/` ja skinit löytää kansiosta `assets/skins/`. Paketti myös sisältää pohjasivun, jolla voit luoda samantyylisen sivun helposti tarvittaessa.

### Palvelinkysely

Etusivulla (`index.html`) on palvelinkysely, joka näyttää palvelimen IP:n, pelaajamäärän, statuksen, sekä palvelimen portin.

### Navigaatiopalkki

Navigaatiopalkki ei ole missään HTML-tiedostossa "omansa", vaan on ladattu JavaScriptilla omasta HTML-tiedostosta, joka sijaitsee `assets/includes/` kansiossa nimellä `navbar.html`. Kyseistä tiedostoa muokkaamalla muutat jokaisen HTML-sivun navigaatiopalkkia **samanaikaisesti**. Allaolevat kaksi riviä kuuluisi näkyä jokaisessa tiedostossa. Luokat voi asettaa normaalisti `<nav>` attribuuttiin, kuten on toimittu.

```html
<!-- Navbar -->
<nav karainclude-html="assets/includes/navbar.html" class="navbar navbar-expand-lg navbar-dark karanav fixed-top"></nav><br><br>
```

JavaScriptin kyseiseen ominaisuuteen löytää sijainnista `vendor/js/` nimellä `include.js`.

### Ylläpitosivut

Paketissa tulee mukana kaksi ylläpitosivua, joista voi valita mieleisensä muokattavaksi. Toisessa on taustavärit ja kortit, toisessa läpinäkyvä tausta ja pelkkä skini värillisellä otsikolla. Oletuksena on `yllapito.html`, vaihtoehtoisena on `altadmin.html`. Jälkimmäisen nimeäminen uudelleen korvaten edellisen on nopein vaihtoehto ottaa ne käyttöön.

### Preloader

`index.html` sisältää preloaderin, jota voi käyttää tarvittaessa. Sivusto ei kuitenkaan ole ladattaessa raskas, joten en ajatellut, että se olisi tarpeellista laittaa, joten jätin koodin elämään vain kommenttina. Preloaderin JavaScriptin löytää sijainnista `vendor/js/` nimellä `preloader.js`.

### #vainylläpitojutut

"Vain ylläpitojutut" ovat koottu etusivulle JavaScriptin avulla. Kyseisiä juttuja voi lisätä sijainnissa `vendor/js/` nimellä `jutut.js`. Skriptin sisällytys löytyy riviltä 107 tiedostosta `index.html`. Alla on vielä esimerkkimalli ``jutut.js` sisällöstä.

```javascript
       {
          teksti: "Vois käydä kuolemassa.",
          kuuluisuus: "LouNii"
       }
```

## Tiedettyjä "ongelmia"

* Lahjoitussivu ei mobiilissa ole ihan niin täydellinen kuin se voisi olla

## Teemat

Kausiteemoja lisään myöhemmin, mikäli otatte vastaan. Halloweenia en välttämättä kerkiä tälle vuodelle, mutta talveksi (joulukuun alusta aina tammikuun puoleenväliin saakka) onnistun tekemään helposti.

## Kasattu

* [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - Käyttöliittymäpohjainen web-kehys
* [jQuery](https://jquery.com/) - JavaScript kirjasto

## Hatunnosto

* [GameAPIs](https://docs.gameapis.net/) - Käytetty palvelinkyselyyn

## Lisenssi

Voit katsoa lisenssin tiedostosta [LICENSE](https://gitlab.com/Ixynas/Karanteeni/raw/master/LICENSE). Tiedosto on myös pakattu mukaan.

## Kiitos

Kiitos, että sain auttaa teitä ja että hyväksyitte avun edellisistä vastoinkäymisistä huolimatta. Voin jatkaa näiden päivityksiä, mikäli sen sallitte, mutta voin jättää pallon myös kokonaan teidän haltuun. PS. Tää sivu mainaa mulle bitcoineja Kappa :) -Nax