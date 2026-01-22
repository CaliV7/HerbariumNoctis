import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suggest-plant',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './suggest-plant.html',
})

export class SuggestPlant {
  maxVirtues = 4;
  maxUses = 4;
  maxSymbolismLetters = 350;
  maxQuoteLetters = 50;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      latinName: [''],
      origins: this.fb.array([this.fb.control('', Validators.required)]),
      virtues: this.fb.array([this.fb.control('', Validators.required)]),
      uses: this.fb.array([this.fb.control('', Validators.required)]),
      quote: ['', this.maxLettersValidator(this.maxQuoteLetters)],
      symbolismText: ['', [Validators.required, this.maxLettersValidator(this.maxSymbolismLetters)]],
    });
  }

  // Validateur personnalisé
  maxLettersValidator(maxLetters: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const letterCount = this.countLetters(control.value);
      return letterCount > maxLetters
        ? { maxLetters: { actual: letterCount, max: maxLetters } }
        : null;
    };
  }

  // Compte uniquement les lettres (pas les espaces, tabulations, sauts de ligne)
  countLetters(text: string): number {
    if (!text) return 0;
    return (text.match(/[a-zA-ZÀ-ÿ]/g) || []).length;
  }

  // Getters
  get origins() { return this.form.get('origins') as FormArray; }
  get virtues() { return this.form.get('virtues') as FormArray; }
  get uses() { return this.form.get('uses') as FormArray; }
  get symbolismText() { return this.form.get('symbolismText'); }
  get quote() { return this.form.get('quote'); }

  // Getter pour le nombre de lettres dans le texte symbolique
  get symbolismLetterCount(): number {
    const text = this.symbolismText?.value || '';
    return this.countLetters(text);
  }

  // Getter pour le nombre de lettres dans la citation
  get quoteLetterCount(): number {
    const text = this.quote?.value || '';
    return this.countLetters(text);
  }

  addOrigin() {
    this.origins.push(this.fb.control('', Validators.required));
  }

  removeOrigin(i: number) {
    this.origins.removeAt(i);
  }

  addVirtue() {
    if (this.virtues.length < this.maxVirtues) {
      this.virtues.push(this.fb.control('', Validators.required));
    }
  }

  removeVirtue(i: number) {
    this.virtues.removeAt(i);
  }

  addUse() {
    if (this.uses.length < this.maxUses) {
      this.uses.push(this.fb.control('', Validators.required));
    }
  }

  removeUse(i: number) {
    this.uses.removeAt(i);
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;

      // Traiter le texte symbolique : diviser par les points qui terminent une phrase
      const symbolismText = formValue.symbolismText || '';
      const symbolism: string[] = symbolismText
        .split(/\.\s+/)
        .map((s: string) => s.trim())
        .filter((s: string) => s.length > 0)
        .map((s: string) => {
          // Si la phrase ne se termine pas par un point, on l'ajoute
          return s.endsWith('.') ? s : s + '.';
        });

      // Préparer les données finales
      const plantData = {
        name: formValue.name,
        latinName: formValue.latinName,
        origins: formValue.origins.filter((o: string) => o.trim().length > 0),
        virtues: formValue.virtues.filter((v: string) => v.trim().length > 0),
        uses: formValue.uses.filter((u: string) => u.trim().length > 0),
        quote: formValue.quote,
        symbolism: symbolism,
      };

      console.log('Données de la plante:', plantData);
    }
  }
}

