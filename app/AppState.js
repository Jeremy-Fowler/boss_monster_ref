import { Boss } from "./Models/Boss.js"
import { Hero } from "./Models/Hero.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)
  /** @type {import('./Models/Hero').Hero[]} */
  heroes = [
    new Hero('Sam', 100, 1, 'https://www.spriters-resource.com/resources/sheet_icons/144/147377.gif'),
    new Hero('Mick', 100, 1, 'https://www.spriters-resource.com/resources/sheet_icons/144/147372.gif'),
    new Hero('Jeffe', 100, 500, 'https://www.spriters-resource.com/resources/sheet_icons/144/147379.gif'),
    new Hero('Tyler', 100, 1, 'https://www.spriters-resource.com/resources/sheet_icons/144/147378.gif'),
  ]
  /** @type {import('./Models/Boss').Boss} */
  boss = new Boss('Slimy Boy', 1000, './assets/img/slime.png', 50, 3.50)
  foundMoney = 0
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
