import { appState } from "../AppState.js"

class GameService {
  attackBoss() {
    let heroes = appState.heroes
    let boss = appState.boss
    heroes.forEach(hero => {
      boss.hp -= hero.strength * hero.lvl
    })
    if (boss.hp <= 0) {
      appState.foundMoney += boss.wallet * 10
    }
  }
}

export const gameService = new GameService()