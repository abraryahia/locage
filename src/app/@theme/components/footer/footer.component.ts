import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://github.com/sehamwaheed" target="_blank">Seham ^_^</a></b> 2021
    </span>
    <div class="socials">
      <a href="https://github.com/sehamwaheed" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <!-- <a href="#" target="_blank" class="ion ion-social-twitter"></a> -->
      <a href="https://www.linkedin.com/in/seham-waheed-7b6364162/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
