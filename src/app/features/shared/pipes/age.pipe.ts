import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthDate: unknown, ...args: unknown[]): unknown {
    console.log(birthDate);
    console.log(typeof birthDate);
    if (!birthDate) return 'N/A';
    if (typeof birthDate === 'object') {
      const date: any = birthDate;
      return this.coversionDate(date);
    } else if (typeof birthDate === 'string') {

      return this.coversionDate(new Date(birthDate));
    }
    return null;
  }
  coversionDate(birthDate: Date) {
    console.log(birthDate);
    let year = birthDate.getFullYear();
    let month = birthDate.getMonth();
    let days = birthDate.getDate();

    let currentDate = new Date();
    let selectedDateMS = birthDate.getMilliseconds();
    let currentDateMS = new Date().getMilliseconds();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDays = currentDate.getDate();
    if (selectedDateMS > currentDateMS )
      return 'Invalid Date';
    else if((currentDate.getMonth() < month ||(currentDate.getMonth() == month && days > currentDays)) && year == currentYear)
      return 'Please select previous Date';
    else if(currentDate.getMonth() == month && days <= currentDays &&year == currentYear)
              return (this.caluclateMonth(currentMonth,month))  + " Months"
    else {
      // checking current year or not
      if (year == currentYear) {
        return (this.caluclateMonth(currentMonth,month))  + " Months"
      } else {
        return (currentYear - year) +"Years "+ ((this.caluclateMonth(currentMonth,month)) + " Months")
      }

    }
  }
  caluclateMonth(m1: any, m2: any) {
    let month = 0;
    if (m1 > m2)
      month = (m1 - m2);
    else
      month = (m2 - m1);
    return month + 1
  }

}
