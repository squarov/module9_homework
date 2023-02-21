const parse = new DOMParser();
const xmlStudents = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parse.parseFromString(xmlStudents, "text/xml");


let listXML = xmlDOM.querySelector("list");
let studentXML = listXML.querySelector("student");
let nameXML = studentXML.querySelector("name");
let firstXML = nameXML.querySelector("first");
let secondXML = nameXML.querySelector("second");
let ageXML = studentXML.querySelector("age");
let profXML = studentXML.querySelector("prof");
let langAttr = nameXML.getAttribute("lang");

let studentXML2 = listXML.querySelector("student:last-child");
let nameXML2 = studentXML2.querySelector("name");
let firstXML2 = nameXML2.querySelector("first");
let secondXML2 = nameXML2.querySelector("second");
let ageXML2 = studentXML2.querySelector("age");
let profXML2 = studentXML2.querySelector("prof");
let langAttr2 = nameXML2.getAttribute("lang");

const result = {
    list: [
        {
        name: `${firstXML.textContent} ${secondXML.textContent}`,
        age: Number(ageXML.textContent),
        prof: profXML.textContent,
        lang: langAttr
        }, {
        name: `${firstXML2.textContent} ${secondXML2.textContent}`,
        age: Number(ageXML2.textContent),
        prof: profXML2.textContent,
        lang: langAttr2
        },
    ]
};
console.log(result);