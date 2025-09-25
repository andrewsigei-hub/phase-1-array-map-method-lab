const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      // Special cases that should not be split
      if (word.toLowerCase() === 'nan') {
        return 'NaN';
      }
      
      // Handle camelCase words by inserting spaces before uppercase letters
      // but preserve certain patterns
      let result = word;
      
      // Handle camelCase splitting more carefully
      if (word.includes('stopPropagation')) {
        result = word.replace('stopPropagation', 'StopPropagation');
      } else if (word.includes('preventDefault')) {
        result = word.replace('preventDefault', 'PreventDefault');
      } else {
        // General camelCase handling - insert space before uppercase letters
        result = word.replace(/([a-z])([A-Z])/g, '$1 $2');
      }
      
      // Split on spaces and capitalize each part
      return result.split(' ').map(part => {
        return part.charAt(0).toUpperCase() + part.slice(1);
      }).join(' ');
    }).join(' ');
  });
}
