import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "money", pure: false})
export class MoneyPipe implements PipeTransform {
  public transform(input) {
    let money = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    return money.format(input);
  }
}
