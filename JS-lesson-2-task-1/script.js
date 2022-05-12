function makeObjectDeepCopy(obj){
	if (typeof obj === 'object'){
		let clone = {};
		for (const key in obj){
			clone[key] = makeObjectDeepCopy(obj[key]);
		}
		return clone;
	} else return obj;
};