(function() {
      var lainaukset = [
        {
          teksti: "Mäki pystyisin tekemään ydinreaktorin imurin osista.",
          kuuluisuus: "Nuubles"
        },
        {
          teksti: "Ehkä serverin kaadan joskus vahingossa, mutta kahvia en ole koskaan kaatanut.",
          kuuluisuus: "PreGauris"
        },
        {
          teksti: "Se on hankalaa kuolla..... hankalaa kuunnitella suunnitelma.",
          kuuluisuus: "Nuubles"
        },
        {
          teksti: "Se korjaantuu sit edellises päivitykses.",
          kuuluisuus: "Jomeee"
        },
        {
          teksti: "Jome sä just resettasit ton <b>netherin</b> ja ny on jo <b>dragoni</b> tapettu.",
          kuuluisuus: "lakanakana"
        },
        {
          teksti: "Siinä oli Suomi ja vähänniikö Amerikka ja ei-Amerikka.",
          kuuluisuus: "Nuubles ja maantiede"
        },
        {
          teksti: "Ruoho on grass suomeksi.",
          kuuluisuus: "Nuubles"
        },
        {
          teksti: "Tykkään veden hengittämisestä.",
          kuuluisuus: "Jomeee"
        },
        {
          teksti: "Koitin nipistää seinää, mut en onnistunu.",
          kuuluisuus: "Nuubles"
        },
        {
          teksti: "Tiesittekö, että Trump ei nää painajaisia. Se näkee Kim Jong Unia.",
          kuuluisuus: "Jomeee"
        },
        {
          teksti: "Onko mahollista tehä yhen blockin kokosia blockeja?",
          kuuluisuus: "Nuubles"
        },
        {
          teksti: "Vois käydä kuolemassa.",
          kuuluisuus: "LouNii"
        }
      ];
      var lainaus = lainaukset[Math.floor(Math.random() * lainaukset.length)];
      document.getElementById("lainaus").innerHTML = lainaus.teksti;
      document.getElementById("by").innerHTML = lainaus.kuuluisuus;
    })();