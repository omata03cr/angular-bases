import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "hulk"
  public age:  number = 45

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return ` ${this.name} - ${this.age} `
  }

  changeName(name_: string = 'Spiderman'): void{
    this.name = name_;
  }

  changeAge(age_: number = 25): void{
    this.age = age_;
  }

  resetForm(): void{
    this.age = 45;
    this.name = "hulk";
  }
}
