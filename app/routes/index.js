import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
	model() {
		return "alfred test"
	},
	mss: A([]),
	mts: A([]),
	mcs: A([]),
	actions: {
		emit(source, signal, data) {
			this.mcs.filter(x => x.source === source && x.signal === signal).forEach(slot => slot.slot(slot.target, data))
		},
		ssc(ss, ts, cs) {
			this.mss.pushObjects(ss)
			this.mts.pushObjects(ts)
			this.mcs.pushObjects(cs)
			// 去重
			this.mss.uniq()
			this.mts.uniq()
			this.mcs.uniq()

			window.console.log(this.mcs)
		},
	},
});
