console.log("Javascript is working");

// jquery ajax

$( document ).ready(function() {
    $.ajax(
        {
            url: "/assets/data/content.json",
            success: function(contentFile) {
                console.log( contentFile );
    
                // put Jones Ferdinand in .name
                // console.log( contentFile.userName );
                $( '.name' ).html( contentFile.userName );

                //  Each Label and Value is an array assigned to their respective Label and Value from the content.json file, hence why everything is similar with minor changes

                // forEach loop  fourCardsValues array values to card values
                $( contentFile.fourCards ).each(function ( index, value ) {
                    // console.log(index + ": " + value.label );
                    $(`.fCardsLabel`).eq(index).html(value.label);
                });

                // forEach loop  fourCardsValues array values to card values
                $( contentFile.fourCards ).each(function ( index, value ) {
                    // console.log(index + ": " + value.label );
                    $(`.fCardsValue`).eq(index).html(value.value);
                });

                // forEach loop  trendsLabel array values to trends labels
                $( contentFile.trends ).each(function ( index, value ) {
                    // console.log(index + ": " + value.label );
                    $(`.trendsLabel`).eq(index).html(value.label);
                });

                // forEach loop  trendsValues array values to trends values
                $( contentFile.trends ).each(function ( index, value ) {
                    // console.log(index + ": " + value.value );
                    $(`.trendsValue`).eq(index).html(value.value);
                });

                // forEach loop  ticketsLabel array values to tickets labels
                $( contentFile.tickets ).each(function ( index, value ) {
                    // console.log(index + ": " + value.label );
                    $(`.ticketsLabel`).eq(index).html(value.label);
                });

                // forEach loop  ticketsValues array values to tickets values
                $( contentFile.tickets ).each(function ( index, value ) {
                    // console.log(index + ": " + value.value );
                    $(`.ticketsValue`).eq(index).html(value.value);
                });
            }
        }
    );
});
