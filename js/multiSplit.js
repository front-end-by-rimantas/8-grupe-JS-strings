
function div( text, start, end ) {
    var rez = [ text.substring(0, start), text.substring(end) ];
    return rez;
}

String.prototype.multiSplit = function(split) {
    var text = ''+this;
    
    var rez = [],
        text_array = [];

    if ( typeof(text) !== 'string' ) {
        return 'Skaidyti galima tik teksta.';
    }
    if ( !Array.isArray(split) ) {
        return 'Skaidymo reismes reikia pateikti sarase.';
    }
    if ( split.length === 0 ) {
        return 'Skaidimo reiskmiu turi buti bent viena.';
    }

    // ismetame visus ieskomus zodzius, kurie nera nei karto teskte
    split.forEach( (spl, index) => {
        if ( text.indexOf(spl) === -1 ) {
            // ismetame spl is split saraso
            split.splice(index, 1);
        }
    });

    if ( split.length === 0 ) {
        return 'Skaidimo reiskmiu turi buti bent viena.';
    }

    // console.log('liko ieskoti', split);
    

    if ( text === '' ) {
        return rez;
    }

    text_array = text.split('');

    var search = '',
        current_text = text,
        start_position = -1;

    for ( var i=0; i<current_text.length; i++ ) {
        for ( var j=0; j<split.length; j++ ) {
            search = split[j];
            start_position = current_text.indexOf(search);
            if ( start_position >= 0 ) {
                text_array = div( current_text, start_position, start_position + search.length  );
                // console.log( text_array );
                if ( text_array[0] !== '' ) {
                    rez.push( text_array[0] );
                }
                current_text = text_array[1];
                i = -1;
            }
        }
    }
    if ( text_array[1] !== '' ) {
        rez.push( text_array[1] );
    }

    return rez;
};