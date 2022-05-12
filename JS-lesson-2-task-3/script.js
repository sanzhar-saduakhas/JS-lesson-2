const myIterable = {
	from: 1,
	to: 7,
	[Symbol.iterator](){
		this.curr = this.from;
		return this;
	},
	next() {
		if (typeof this.curr !== 'number' || typeof this.to !== 'number'){
			throw new Error('Значения to или from не являются числами!');
		}
		else if (this.curr <= this.to){
			return { done: false, value: this.curr++};
		} else{
			throw new Error('Ошибка!');
			return {done: true};
		}
	}
};