import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percantage'
})
export class PercantagePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let outOfMarks:number=args[0]
    let percantag=(value/outOfMarks)*100;
    return percantag;
  }

}
