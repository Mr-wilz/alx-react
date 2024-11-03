import './body.css';
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');


let counter = 0;

function updateCounter(){
	counter ++;
	$("#count").html('${counter} clicks on the button');
}

$('button').on('click', _.debounce(updateCounter, 500));
