import Component from "@ember/component"

export default Component.extend( {
	// 相当于构造函数
	didInsertElement() {

	},
	// 想到于析构函数
	willDestroy() {

	},
	actions: {
		emit( source, signal, data ) {
			this.sendAction( "emit", source, signal, data )
		},
		disconnect( ss, ts, cs ) {
			this.sendAction( "disconnect",...this.mstc )
		},
		ssc( ss, ts, cs ) {
			const mss = ss

			mss.pushObject( { "source": this, "signal": "click" } )
			const mts = ts

			mts.pushObject( { "target": this, "slot": this.get( "actions.slots.onClick" ) } )
			const mcs = cs

			mcs.pushObject( {
				"source": this,
				"signal": "click",
				"target": this,
				"slot": this.get( "actions.slots.onClick" )
			} )

			// 连接 one 和 nest
			mcs.pushObject( {
				"source": this,
				"signal": "click",
				"target": ts[0].target,
				"slot": ts[0].slot
			} )
			this.set( "mstc",[mss,mts,mcs] )

			this.sendAction( "ssc", mss, mts, mcs )
		},
		slots: {
			onClick( target, data ) {
				alert( "alfred signal-slot test: cp-test-one" )
			}
		}
	}
} )
