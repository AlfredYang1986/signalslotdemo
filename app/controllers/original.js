import Controller from "@ember/controller"

export default Controller.extend( {
	showCp:true,
	actions: {
		toggleShowCp() {
			this.toggleProperty( "showCp" )
		}
	}
} )
