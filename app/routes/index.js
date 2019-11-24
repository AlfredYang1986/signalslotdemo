import Route from "@ember/routing/route"
import { A } from "@ember/array"

export default Route.extend( {
	model() {
		return "alfred test"
	},
	mss: A( [] ),
	mts: A( [] ),
	mcs: A( [] ),
	actions: {
		emit( source, signal, data ) {
			window.console.log( "index.js actions.emit" )
			// this.mcs.filter( x => x.source === source && x.signal === signal ).forEach( slot => slot.slot( slot.target, data ) )

			const slots = this.mcs.filter( x => x.source === source && x.signal === signal )

			window.console.log( slots )
			slots.forEach( slot => slot.slot( slot.target, data ) )

		},
		ssc( ss, ts, cs ) {
			window.console.log( "index.js" )
			this.mss.pushObjects( ss )
			this.mts.pushObjects( ts )
			this.mcs.pushObjects( cs )
			// 去重
			this.mss.uniq()
			this.mts.uniq()
			this.mcs.uniq()

			window.console.log( this.mcs )
		}
	}
} )
