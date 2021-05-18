import { Component } from "@angular/core";

@Component({
    selector:"app-footer",
    template:`<div class="className">Footer
                {{info}}
            </div>`,
    styles:[".className{color:green}"]
})
export class FooterComponent {
    info:string ="This is footer component";
}