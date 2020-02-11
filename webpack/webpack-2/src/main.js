import $ from "jquery"

import "./css/index.css"

$(function() {
    $("li:odd").css("backgroundColor","red");
    $("li:even").css("backgroundColor","yello");
})

class Person {
    static info = {name :"lisi"};
}
let person = new Person(); 