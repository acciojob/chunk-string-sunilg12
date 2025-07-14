function stringChop(str, size) {
  // your code here

	if (str == null || size < 1) {
    return [];
  }
	
	let arr = [];
	let add = "";
	let i=0;

	for(const ch of str){
		add += ch;
		i++;
		if(i==size){
			arr.push(add);
			add = "";
			i=0;
		}
	}
	if(add !== ""){
		arr.push(add);
	}

	return arr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
