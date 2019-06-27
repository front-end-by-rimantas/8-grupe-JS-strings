"use strict";

var text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, iure. Dolorem, adipisci quos? Fugit dolorem ut dolor emque. Optio officia deleniti cumque porro? Quos tenetur autem earum cupiditate fugiat facere mollitia?';

console.log(text);

console.log( text.indexOf('pomidoras') );
console.log( text.indexOf('ipsum') );


console.log( text.length );
console.log( text[0] );
console.log( text[ text.length-1 ] );

// suskaiciuoti kiek yra ieskomu simboliu
var kiekis = 0;
for( var i=0; i<text.length; i++ ) {
    if ( text[i] === ' ' ) {
        kiekis++;
    }
}
console.log(kiekis);


console.log('------------');

// isskaidyti teksta i array ties nurodytomis vietomis (tekstu)


console.log( ''.multiSplit( [] ) );
console.log( 'abcd'.multiSplit( [] ) );
console.log( 'abcd'.multiSplit( 'b' ) );

console.log( ''.multiSplit( ['a'] ) );
console.log( ''.multiSplit( [''] ) );
console.log( 'abcd'.multiSplit( ['z'] ) );
console.log( 'abcd'.multiSplit( ['b'] ) );
console.log( 'ab.cd'.multiSplit( ['b'] ) );
console.log( 'abcdabcd'.multiSplit( ['b'] ) );
console.log( 'abcdabcd'.multiSplit( ['b', 'd'] ) );
console.log( 'abcdabcd'.multiSplit( ['bc'] ) );
console.log( 'abcd'.multiSplit( ['abcd'] ) );






// ieskome norimo teksto ir ji keiciame

// var change_from = 'dolor',
//     change_to = 'pomidoras';

// text = text.replace( change_from, change_to );
// text = text.replace( change_from, change_to );

// console.log( text );

// String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.split(search).join(replacement);
// };

// var change_from = '.',
//     change_to = ';';

// // text = text.replaceAll( change_from, change_to );
// text = text.split(change_from).join(change_to);

// console.log( text );
