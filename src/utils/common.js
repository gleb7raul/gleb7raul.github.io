export function shuffleLetters(str) {
  let a = str.split("");
  const n = a.length;

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

export function animate() {
  game.hero.updateHero();
  game.monster.updateMonster();
  requestAnimFrame(animate);
}
