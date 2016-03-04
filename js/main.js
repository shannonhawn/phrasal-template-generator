var name = alert('Lets make a story together!');
var colour = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adjective = prompt('An adjective (beautiful, super, etc.)');
var verb = prompt('A past tense verb (ran, burped, etc.)');
var story = prompt('Which story would you like? a)Snacking b)Escaping c)Winning Enter the letter below:');

if (story == 'a') {
  document.write ('After snacking on' + adjective + 'treats, the' + colour + 'bellied' + creature + ' ' + verb + 'for hours.');
}

if (story == 'b') {
  document.write ('Ameilia' + verb + 'through the' + colour + 'adjective' + ' ' + colour + 'nebula escaping the space' + creature);
}

if (story == 'c') {
  document.write ('' + adjective + 'treats, the' + colour + 'bellied' + creature + ' ' + verb + 'for hours.');
}
