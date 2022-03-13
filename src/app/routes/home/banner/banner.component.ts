import { trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fadeIn } from 'src/app/core/animations/fadeIn';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  animations: [trigger('fadeIn', fadeIn())],
})
export class BannerComponent implements OnInit {
  @Output() evtSearch = new EventEmitter();
  @Input() form!: FormGroup;
  @Input() skeleton = true;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  ngOnInit(): void {}

  initForm() {
    this.form = this.fb.group({
      search: [''],
    });
  }

  submit() {
    this.evtSearch.emit(this.form.value.search);
  }
}
