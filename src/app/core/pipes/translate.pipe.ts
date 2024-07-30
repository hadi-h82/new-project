import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
  constructor(private translate : TranslateService){

  }
	transform(n: string): string {
		if (n === null || n === undefined || n === "") {
			return '';
		}
		return this.translate.instant(n);
	}
}
