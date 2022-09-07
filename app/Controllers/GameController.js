import { appState } from "../AppState.js"
import { gameService } from "../Services/GameService.js"

function _drawHeroes() {
  let template = ''
  appState.heroes.forEach(hero => {
    template += hero.Template
  })
  document.getElementById('heroes').innerHTML = template
}

function _drawBoss() {
  document.getElementById('boss').innerHTML = appState.boss.Template
}

function _drawMoney() {
  document.getElementById('money').innerText = appState.foundMoney.toString()
}

export class GameController {
  constructor () {
    _drawHeroes()
    _drawBoss()
  }

  attackBoss() {
    gameService.attackBoss()
    _drawBoss()
    if (appState.boss.hp <= 0) {
      _drawMoney()
    }
  }
}
