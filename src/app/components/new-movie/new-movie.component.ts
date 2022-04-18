import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent {
  @Input() isDarkMode: boolean = true;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  isError: boolean = false;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder) {

    this.form = formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      year: ["", [Validators.required, Validators.min(1895), Validators.max(new Date().getFullYear())]],
      cashFees: ["", [Validators.required, Validators.pattern(/^(?!(^0+(\.0+)?$))^\d{5,10}(\.\d{1,2})?$/)]],
      posterUrl: ["", [Validators.required, Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]],
      createdData: [new Date(), [Validators.required]],
      actors: formBuilder.array([["", Validators.required]])
    });
  }

  get actorsFormArray() {
    return this.form.get('actors') as FormArray;
  }

  addControl() {
    this.actorsFormArray.push(new FormControl("", Validators.required));
  }

  removeControl(index: number) {
    this.actorsFormArray.removeAt(index);
  }

  addMovies() {
    if (this.form.valid) {
      this.passEntry.emit(this.form.value);
      this.activeModal.close();
    } else {
      this.isError = true;
      let hiddenElement: any;
      hiddenElement = document.getElementById("box");
      function handleButtonClick() {
        hiddenElement.scrollIntoView();
      }
      hiddenElement.addEventListener('click', handleButtonClick);
    }
  }
}
