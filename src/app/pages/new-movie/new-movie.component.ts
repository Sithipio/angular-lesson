import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MoviesService} from "../../servises/movies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent {
  form: FormGroup;
  isError: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private moviesService: MoviesService) {

    this.form = formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      year: ["", [Validators.required, Validators.pattern(/^[0-9]+/), Validators.min(1895), Validators.max(new Date().getFullYear())]],
      cashFees: ["", [Validators.required, Validators.pattern(/^(?!(^0+(\.0+)?$))^\d{5,10}(\.\d{1,2})?$/)]],
      posterUrl: ["", [Validators.required, Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]],
      createdData: [new Date().toDateString(), [Validators.required]],
      isFavorite: [false],
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
      this.moviesService.addMovie(this.form.value).then(() => {
        console.log('Created new item successfully!');
        this.router.navigate(['/']);
      });
    } else {
      this.isError = true;
    }
  }
}
