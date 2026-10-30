function appliquerRemise(prix, pourcentage) {
  if (pourcentage < 0 || pourcentage > 100) {
    throw new Error('Remise invalide');
  }
  return Math.round(prix * (1 - pourcentage / 100));
}

module.exports = { appliquerRemise };
