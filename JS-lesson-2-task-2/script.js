function selectFromInterval(arr, from, to){
	if (!Array.isArray(arr)){
		throw new Error('Ошибка!');
	} else {
		if (typeof from !== 'number' || typeof to !== 'number'){
			throw new Error('Ошибка, интервалы не являются валидном числом!');
		} else {
			if (from > to){
				const l = from;
				from = to;
				to = l;
			}
			if (from < 0 || to < 0){
				throw new Error('Ошибка, интервалы не являются валидном числом!');
			}
			let newArray = new Array();
			for (let ind = from - 1; ind < Math.min(arr.length - 1, to); ind++){
				if (typeof arr[ind] !== 'number'){
					throw new Error('Элементы массива не являются числом');
				}
				newArray.push(arr[ind]);
			}
			return newArray;
		}
	}
};
