import "../styles/style.less";
import _ from "lodash";
import small from"../media/2.png";
import big from "../media/1.jpg";

function add(a, b) {
	return a+b;
}

const compacted = _.compact([0,1,false,]);
console.log(compacted);


const img = document.createElement("img");
img.src= big;
document.body.appendChild(img);
module.exports = add;