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
		disconnect( ss,ts,cs ) {
			console.log( "in frank-comp.js disconnect" )
		}
	}
} )
