import {Observable} from 'rxjs';

let observable = Observable.create((observer:any) => {
  observer.next("hey guys");
  observer.next("hey guys rajeev");
  observer.complete();
  observer.next("hey guys lochan");

});

observable.subscribe(
  (x:any)=> addItem(x),
  (error:string)=> addItem(error),
  ()=> addItem(`Completed`)
)

function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}