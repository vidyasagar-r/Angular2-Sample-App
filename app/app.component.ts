import { Component }	from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div class="jumbotron text-center">
			<h1>WelCome to our Sample App!</h1>
		</div>
	`,
	styles: [`
		.jumbotron {
			box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
		}
	`]
})
export class AppComponent {}