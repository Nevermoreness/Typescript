/*
1.ECMAScript 的内置对象
    Boolean
    Number
    String
    Date
    RegExp
    Error
2.BOM和DOM的内置对象
    Window
    Document
    HTMLElement
    DocumentFragment
    Event
    NodeList
    */

//ECMAScript的内置对象
let b: Boolean = new Boolean(1);
let n: Number = new Number(1);
let s: String = new String(2);
let d: Date = new Date('abc');
let r: RegExp = /^1/;
let e: Error = new Error('error message');

//BOM和DOM的内置对象
const div: HTMLElement = document.getElementById('div');
const divs: NodeList = document.querySelectorAll('div');
document.addEventListener('click', (event: MouseEvent) => {
    console.log(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment();
