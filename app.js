//here goes your json of operations
const maker = [{"result":1,"operator":"AND"},{"result":0,"operator":"OR"},{"result":1,"operator":"OR"},{"result" : 1, "operator" : 'OR'}]
//stores our operations
let ss = ''
//go through each data set
maker.forEach((data,index)=>{
	//if not last set then
	if(maker.length-1!=index){
		//add the very first number to operation
		ss+= data.result
		//based on operator , supply the symbol
		if(data.operator == "AND"){
			ss+='*'
		}
		else if (data.operator == "OR"){
			ss+='+'
		}
		//add more here
		else {
			ss+='-'
		}
	}
	//if last set then
	else{
		//just supply the number , if its last set , dont supply the oprator
		ss+=data.result
	}
})
//ss holds our operation
//lets evaluate through the opeation and get the data
const result = eval(ss)
//it will have value either 1 or 0 
if(result!=0){
	console.log(true)
}
else{
	console.log(false)
}