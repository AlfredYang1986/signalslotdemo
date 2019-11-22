import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({
	didInsertElement() {
		this.sendAction("ssc", A([]), A([]), A([]))
	},
});
