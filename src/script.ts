const resize = document.querySelector(".resize") as HTMLButtonElement;
const extraButton = document.querySelector(".extra-button") as HTMLElement;
const calculator = document.querySelector(".calculator") as HTMLElement;
const windowHeader = document.querySelector(".window-action") as HTMLElement;
const result = document.querySelector(".result") as HTMLDivElement;


const zero = document.querySelector(".zero") as HTMLButtonElement;


let hidden:boolean = true;
let isDown:boolean = false;
let offset:Array<number>;
let mousePosition:{x:number, y:number};
let exp1:string="";
let op:string="";
let exp2:string="";
let expFull:string="";

function appendExp(char:string) {
	if(result.innerText == null || result.innerText == "0")
        result.innerText = char
	else
        result.innerText += char
}


function cos() {
	result.innerText = Math.cos(Number(result.innerText)).toString();
}

function cosh() {
	result.innerText = Math.cosh(Number(result.innerText)).toString();
}

function sin() {
	result.innerText = Math.sin(Number(result.innerText)).toString();
}

function sinh() {
	result.innerText = Math.sinh(Number(result.innerText)).toString();
}

function tan() {
	result.innerText= Math.tan(Number(result.innerText)).toString();
}

function tanh() {
	result.innerText= Math.tanh(Number(result.innerText)).toString();
}

function sqrt() {
	result.innerText =Math.sqrt(Number(result.innerText)).toString();
}

function cbrt() {
	result.innerText =Math.cbrt(Number(result.innerText)).toString();
}

function ln() {
	result.innerText = Math.log(Number(result.innerText)).toString();
}

function log10() {
	result.innerText = Math.log10(Number(result.innerText)).toString();
}

function exp() {
	result.innerText= Math.exp(Number(result.innerText)).toString();
}

function pow10() {
	result.innerText= Math.pow(10,Number(result.innerText)).toString();
}

function powe() {
	result.innerText= Math.pow(2.71828182,Number(result.innerText)).toString();
}

function factorial() {
    var ans=1;

    for (var i = 2; i <= Number(result.innerText); i++)
        ans = ans * i;
    result.innerText = ans.toString();
}

function radians()
{
    var pi = Math.PI;
    result.innerText= (Number(result.innerText) * (pi/180)).toString();
}

function rand(){
    result.innerText = Math.floor(Math.random() * Number(result.innerText)).toString();
}

function deno(){
    result.innerText = (1/Number(result.innerText)).toString();
}

function deleteChar() {
	result.innerText = result.innerText.substring(0, result.innerText.length - 1)
}

function percent() {
//   val = input.value;
    result.innerText = result.innerText + "%";
}

function changeSign() {
	if(result.innerText.substring(0, 1) == "-")
        result.innerText = result.innerText.substring(1, result.innerText.length)
	else
        result.innerText = "-" + result.innerText
}

function compute() {
    result.innerText = eval(result.innerText);
}

function square() {
	result.innerText = (eval(result.innerText) * eval(result.innerText)).toString();
}

function cube() {
	result.innerText = (eval(result.innerText) * eval(result.innerText) * eval(result.innerText)).toString();
}

function checkNum() {
    let str = result.innerText;
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." && ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
			}
		}
	}
	return true
}

windowHeader.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        calculator.offsetLeft - e.clientX,
        calculator.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        calculator.style.left = (mousePosition.x + offset[0]) + 'px';
        calculator.style.top  = (mousePosition.y + offset[1]) + 'px';
        localStorage.setItem("top",calculator.style.top);
        localStorage.setItem("left",calculator.style.left);
    }
}, true);

resize.addEventListener("click", ()=>{
    hidden=!hidden;
    if(hidden){
        extraButton.classList.add("hidden");
        zero.classList.add("rounded-bl-lg")
    }else{
        extraButton.classList.remove("hidden");
        zero.classList.remove("rounded-bl-lg")
    }
    localStorage.setItem("hidden",JSON.stringify(hidden));
    // console.log(hidden);
})

window.onload=()=>{
    if(localStorage.getItem("hidden")!==null){
        hidden = JSON.parse(localStorage.getItem("hidden")||"true");
    }
    if(hidden){
        extraButton.classList.add("hidden");
        zero.classList.add("rounded-bl-lg")
    }else{
        extraButton.classList.remove("hidden");
        zero.classList.remove("rounded-bl-lg")
    }
    calculator.classList.remove("hidden");
    // console.log(hidden);
    
    if(localStorage.getItem('top') && localStorage.getItem('left')){
        calculator.style.top=localStorage.getItem('top')||"";
        calculator.style.left=localStorage.getItem('left')||"";
    }
}