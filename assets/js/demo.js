type = ['','info','success','warning','danger'];


demo = {
	showNotification: function(from, align){
    	color = Math.floor((Math.random() * 4) + 1);

    	$.notify({
        	icon: "pe-7s-star",
        	message: "WARNING: You are WAY TOO AWESOME."

        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
	}
}
