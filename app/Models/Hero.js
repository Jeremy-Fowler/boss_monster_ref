import { generateId } from "../Utils/generateId.js"

export class Hero {
  constructor (data) {
    this.id = generateId()
    this.name = data.name
  }
}