import { LangService } from './../../core/lang.service';
import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Pipe({ name: 'translate', pure: false })
export class TranslatePipe implements PipeTransform, OnDestroy {
  value = '';
  onTranslationChange: Subscription;
  constructor(private langService: LangService) {}
  transform(key: any): string {
    if (!this.onTranslationChange) {
      this.onTranslationChange = this.langService.langChange.subscribe(() => {
        this.value = this.langService.get(key);
      });
    }
    if (this.langService.langData) {
      this.value = this.langService.get(key);
    }
    return this.value;
  }
  ngOnDestroy() {
    this._destory();
  }
  _destory() {
    if (typeof this.onTranslationChange !== 'undefined') {
      this.onTranslationChange.unsubscribe();
      this.onTranslationChange = undefined;
    }
  }
}
