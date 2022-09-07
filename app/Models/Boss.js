export class Boss {
  constructor (name, hp, img, lvl, wallet) {
    this.name = name
    this.hp = hp
    this.img = img
    this.lvl = lvl
    this.wallet = wallet
  }

  get Template() {
    return `
    <div class="col-12 col-md-8 d-flex justify-content-center">
          <div class="boss-card rounded shadow d-flex flex-column border-whitesmoke">
            <div>
              <div class="progress m-3">
                <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style="width: ${this.hp}%"
                  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="boss-name text-center">
              ${this.name}
            </div>
            <img onclick="app.gameController.attackBoss()" src="${this.img}" alt="" class="text-center img-fluid align-self-center">
          </div>
        </div>
    `
  }
}