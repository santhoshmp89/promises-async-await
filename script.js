const promiseEle = document.getElementById('promises');
const animatePromise = function() { 	
	return new Promise(function(resolve, reject) {			
		promiseEle.addEventListener('animationend', function() {
			resolve('Add Text')
		})	
	})
}

animatePromise().then(function(data) {
	let eleNode = document.createElement('p');
	eleNode.innerHTML = data;
	promiseEle.appendChild(eleNode);
})


const asyncEle = document.getElementById('async');
const animateAsync = function() {
	return new Promise(function(resolve, reject) {
		asyncEle.addEventListener('animationend', function(){
			resolve('async text');
		})
	})
};

(async () => {	
	let animationEnd = await animateAsync();
	let eleNode = document.createElement('p');
	eleNode.innerHTML = animationEnd;
	asyncEle.appendChild(eleNode);
})();






