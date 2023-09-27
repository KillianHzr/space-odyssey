let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("/!\\ KEEP OUT DANGER /!\\");
});



// 1 - Symbologie Planétaire
router.get('/symbologiePlanetaire', function(req, res) {
  const symbologiePlanetaireDecode = req.body.symbologiePlanetaire;
  const symbologiePlanetaireSecret = "00000";

  if (symbologiePlanetaireDecode === symbologiePlanetaireSecret) {
      res.json({ success: true });
  } else {
      res.json({ success: false });
  }
});


// 4 - Ordre Solaire (ordreSolaire)
router.get('/ordreSolaire', function(req, res) {
  const ordreUtilisateur = req.query.ordreSolaire; // Exemple d'URL : /ordreSolaire?ordre=["Mercure","Vénus","Terre","Mars","Jupiter","Saturne","Uranus","Neptune"]
  
  const ordreCorrect = ['Mercure', 'Vénus', 'Terre', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune'];

  const estCorrect = JSON.stringify(ordreUtilisateur) === JSON.stringify(ordreCorrect);

  if (estCorrect) {
    res.json({ success: true, message: 'Bravo ! L\'ordre des planètes est correct.' });
  } else {
    res.json({ success: false, message: 'L\'ordre des planètes est incorrect. Essayez encore.' });
  }
});



// 2 - Les A-sari Disparus
router.get('/lesAsariDisparus', function(req, res) {
  const lesAsariDisparusDecode = req.body.lesAsariDisparus;
  const lesAsariDisparusSecret = "asariLost";

  if (lesAsariDisparusDecode === lesAsariDisparusSecret) {
      res.json({ success: true });
  } else {
      res.json({ success: false });
  }
});


// 3 - L'énigme Stellaire
router.get('/lenigmeStellaire', function(req, res) {
  const lenigmeStellaireDecode = req.body.lenigmeStellaire;
  const lenigmeStellaireSecret = "00000";

  if (lenigmeStellaireDecode === lenigmeStellaireSecret) {
      res.json({ success: true });
  } else {
      res.json({ success: false });
  }
});


// 5 - Cryptographie A'sari
router.get('/cryptographieAsari', function(req, res) {
    const cryptographieAsariDecode = req.body.cryptographieAsari;
    const cryptographieAsariSecret = "MESSAGE_SECRET";

    if (cryptographieAsariDecode === cryptographieAsariSecret) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});


// 6 - Navigation Intergalactique
router.get('/navigationIntergalactique', function(req, res) {
    const navigationIntergalactiqueDecode = req.body.navigationIntergalactique;
    const navigationIntergalactiqueSecret = "0438";

    if (navigationIntergalactiqueDecode === navigationIntergalactiqueSecret) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});


module.exports = router;
