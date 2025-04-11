import { Component } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { MatCalendarCellClassFunction } from "@angular/material/datepicker";

const SAMPLE_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra elit et arcu scelerisque accumsan. Nam lacinia eget velit sed porta. Quisque suscipit tempus lobortis. Proin felis tortor, pharetra quis pulvinar sed, ullamcorper feugiat turpis. Vivamus lacus lacus, condimentum sed tempus a, commodo et elit. Donec euismod iaculis tortor, quis viverra tortor lobortis nec. Proin tempor cursus faucibus. Sed elementum bibendum justo a finibus. ";
@Component({
  selector: "create-course-step-1",
  templateUrl: "create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"],
})
export class CreateCourseStep1Component {
  form = this.fb.group({
    title: [
      "",
      [Validators.required, Validators.minLength(5), Validators.maxLength(60)],
    ],
    releasedAt: [new Date(1900, 0, 1), Validators.required],
    category: ["BEGINNER", Validators.required],
    courseType: ["premium", Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [
      SAMPLE_TEXT,
      [Validators.required, Validators.minLength(3)],
    ],
  });

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    const date = cellDate.getDate();
    if (view == "month") {
      return date == 1 ? "highlight-date" : "";
    }
    return "";
  };

  constructor(private fb: UntypedFormBuilder) {}

  get courseTitle() {
    return this.form.controls["title"];
  }
}
