export interface AbstractFormsInterface {
  /*
   *
	(field:string)=>{
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSumitAttempt)
    );
  }
   * */
  isFieldValid: (field: string) => boolean;
  formSumitAttempt: boolean;
}
