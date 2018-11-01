import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') private menuIsOpened: boolean = false;

  @HostListener('click') onClick() {
    this.toggleMenu();
  }

  toggleMenu() {
    this.menuIsOpened = !this.menuIsOpened;
  }
}
