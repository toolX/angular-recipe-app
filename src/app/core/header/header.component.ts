import { Component } from "@angular/core";

import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        newRecipe => console.log(newRecipe)
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
