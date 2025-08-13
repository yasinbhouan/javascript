//strings
'single quotes';
"double quotes";

//string with quotes
'single quotes with "double quotes" inside';
"double quotes with 'single quotes' inside";

/*
//string error with same quotes inside
'single quotes with 'single quotes' inside'; // This will cause an error
"double quotes with "double quotes" inside"; // This will also cause an error
*/

//escaping characters
'It\'s a string with an escaped single quote'; // Escaping single quotes
"She said, \"Hello!\""; // Escaping double quotes
'Backslash can also be escaped: \\ This is a backslash'; // Escaping backslash
'this is a new line string \n and this is the next line'; // New line character

'multiple' + 'string' + ' concatenation'; // Concatenating strings

//template strings
`template strings`;
`template strings can have "double quotes" and 'single quotes' inside them`;
`template strings can also have ${'variables'} inside them`; // Using variables in template strings

//template strings allow multiline strings
`This is a template string
that spans multiple lines`;
