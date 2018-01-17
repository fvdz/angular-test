
let numberArray: Array<number>;

numberArray = [2, 3, 4];

console.log(numberArray);

// properties and event binding.
/*


for example in your template file (.component.html)

    //property binding 
    <p [innerText]="showNewServer">paragraaf</p>

    // Event binding
    <button class="btn btn-primary" (click)="onServerCreate()">Add</button>
    Status: {{ showCreationStatus }}

And in the class file (.component.ts) :

    export class ServerComponent {
        showNewServer = false;
        showCreationStatus = 'Server not created';

        constructor() {
            setTimeout(() => {
                this.showNewServer = true;        
            }, 2000);
        }

        ngOnInit(){

        }

        onServerCreate() {
            this.showCreationStatus = 'Server has been created';
        }

    }

*/