import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[mwFavorite]',
  //   creating building (attribute directive: custom)
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = false; //representing property syntax
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set mwFavorite(val) {
    this.isFavorite = val;
  }
}
