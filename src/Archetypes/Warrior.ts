import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  static _createdIntances = 0;
  private _energyType: EnergyType;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior._createdIntances += 1;
  }

  static createdArchetypeInstances() {
    return this._createdIntances;
  } 

  get energyType(): EnergyType {
    return this._energyType;
  }
}