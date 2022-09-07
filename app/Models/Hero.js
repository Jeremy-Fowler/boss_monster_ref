export class Hero {
  constructor (name, hp, lvl, img) {
    this.name = name
    this.hp = hp
    this.lvl = lvl
    this.img = img
    this.strength = 1
  }

  get Template() {
    return `
    <div class="col-3">
        <div class="hero-card bg-dark border-whitesmoke rounded p-2">
          <div class="d-flex justify-content-center">
            <div class="hero-name">${this.name}</div>
            <img src="${this.img}" alt="">
          </div>
          <div class="d-flex justify-content-between">
            <span>HP:</span>
            <span>${this.hp}</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>LVL:</span>
            <span>${this.lvl}</span>
          </div>
        </div>
      </div>
    `
  }
}