import Route from "@ember/routing/route"
import { A } from "@ember/array"

export default Route.extend( {
	model() {
		return "alfred test"
	},
	mss: A( [] ),
	mts: A( [] ),
	mcs: A( [] ),
	test: A( [] ),
	actions: {
		emit( source, signal, data ) {
			this.mcs.filter( x => x.source === source && x.signal === signal ).forEach( slot => slot.slot( slot.target, data ) )
		},
		disconnect( ss,ts, cs ) {
			this.mss.removeObjects( ss )
			this.mts.removeObjects( ts )
			this.mcs.removeObjects( cs )
		},
		ssc( ss, ts, cs ) {
			this.mss.pushObjects( ss )
			this.mts.pushObjects( ts )
			this.mcs.pushObjects( cs )
			// 去重,uniq 只能作用于原始数据类型。
			this.mss.uniq()
			this.mts.uniq()
			this.mcs.uniq()
		},
		willTransition( ) {
			// 当跳转路由 此页面的 signals & slot 的绑定关系全部删除
			this.mss.clear()
			this.mts.clear()
			this.mcs.clear()
		}
	}

} )
